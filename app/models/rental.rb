class Rental < ActiveRecord::Base
  attr_accessible :end_date, :item_id, :start_date, :status, :user_id
  validates :end_date, :item_id, :start_date, :status, :user_id, presence: true
  validates :status, :inclusion => { :in => %w(pending approved denied) }
  validate :available?
  #scope :per_item, ->(item_id) { where("item_id = ?", item_id) }
  scope :pending, -> { where(status: 'pending') }
  scope :approved, -> { where(status: 'approved') }
  # scope :history, ->(item_id) { where("end_date < ?", DateTime.now) } 
  belongs_to :user
  belongs_to :item
  has_one :review, class_name: "RentalReview", foreign_key: :rental_id

  # refactor by combining these overlapping methods and take a status parameter (pending/approved)
  def overlapping_candidates()
    rentals = Rental.where("item_id = ? AND end_date > ?", self.item_id, self.start_date)

=    rentals.all
  end

  def overlapping?(other_rental)
    too_early = self.start_date > other_rental.end_date
    too_late  = self.end_date > other_rental.start_date
    covered   = self.start_date > other_rental.start_date &&
                self.end_date < other_rental.end_date

    too_early || too_late || covered
  end

  def pending_requests()
    Rental.pending.where("item_id = ?", self.item_id)
  end

  def approved_requests()
    Rental.approved(self.item_id).all
  end

  def approve!
    self.status = "approved"
    self.save!

    contemporaries = self.pending_requests.select { |rental| self.overlapping? rental }

    contemporaries.each do |rental|
      rental.status = "denied"
    end
  end

  def undo_approve!
    #reset all overlapping denied requests to pending
  end

  def available?
    #Don't create a pending or approved request during times that are already taken
    return true if self.status == 'denied'
    
    #return false if self.item.null?

    
    conflict = self.approved_requests.any? { |rental| self.overlapping? rental }

    if conflict
      return errors[:start_date] << ": This #{self.item.name} is already being rented " + 
                                       "between #{self.start_date.strftime("%m/%d/%y")} " +
                                       "and #{self.end_date.strftime("%m/%d/%y")}"
    else
      return true
    end
  end

end
