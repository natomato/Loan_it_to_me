class Rental < ActiveRecord::Base
  attr_accessible :end_date, :item_id, :start_date, :status, :user_id
  validates :end_date, :item_id, :start_date, :status, :user_id, presence: true
  validates :status, :inclusion => { :in => %w(pending approved denied) }
  validate :available?
  #scope :per_item, ->(item_id) { where("item_id = ?", item_id) }
  scope :pending, -> { where(status: 'pending') }
  scope :future, -> { where("start_date > ?", DateTime.now) }
  scope :past, -> { where("end_date < ?", DateTime.now) } 
  scope :approved, -> { where(status: 'approved') }
  belongs_to :user #the user making the request
  belongs_to :item
  has_one :review, class_name: "RentalReview", foreign_key: :rental_id

  def contemporaries(status = nil)
    #rentals for this item minus the ones that are already over
    rentals = Rental.where("item_id = ? AND end_date > ?", self.item_id, self.start_date ).order("start_date DESC")
    rentals.select!   { |rental| rental.status == status } if status
    rentals.delete_if { |rental| self.id == rental.id }
    rentals.select    { |rental| self.overlapping?(rental) }
  end

  def overlapping?(other_rental)
    too_early = self.start_date > other_rental.end_date
    too_late  = self.end_date > other_rental.start_date
    covered   = self.start_date > other_rental.start_date &&
                self.end_date < other_rental.end_date

    too_early || too_late || covered
  end

  def approve!
    self.status = "approved"
    self.save!

    self.contemporaries("pending").each do |rental|
      rental.status = "denied"
      rental.save!
    end
  end

  # TODO: Fix this.
  # undo_approve will incorrectly change a bridged request to pending
  # example: a(1, 3) p(2, 5) ua(4, 6)
  def undo_approve!
    #reset all overlapping denied requests to pending
    self.status = "pending"
    self.save!

    self.contemporaries("denied").each do |rental|
      rental.status = "pending"     
      rental.save! #transaction rollback, fails available? test
    end
  end

  def available?
    #Don't create a request during times that are already taken
    return true if self.status == 'denied'
    
    if self.item_id.nil? then
      return errors[:item_id] << "Couldn't find item #{self.item_id}" 
    end
    
    conflicts = self.contemporaries("approved")

    if conflicts.empty?
      return true
    else
      conflict = conflicts.first
      return errors[:start_date] << ": This #{self.item.name} is already being rented " + 
                                    "during #{conflict.start_date.strftime("%m/%d/%y")} " +
                                    "and #{conflict.end_date.strftime("%m/%d/%y")}"
    end

  end

end
