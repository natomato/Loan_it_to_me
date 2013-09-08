class Item < ActiveRecord::Base
  attr_accessible :avg_rating, :category_id, :description, :home_id, :name, :price, :main_photo_id
  
  validate :category_id, :home_id, :name, presence: true
  
  belongs_to :home
  belongs_to :category
  has_one :owner, through: :home, source: :user
  has_many :photos, class_name: "ItemPhoto", foreign_key: :item_id
  has_many :rentals
  has_many :reviews, through: :rentals, source: :review
  
  def average_rating
    item_id = id.to_i

    RentalReview.find_by_sql(<<-SQL)
      SELECT AVG(rating) rating
      FROM rental_reviews JOIN rentals
      ON rental_reviews.rental_id = rentals.id
      WHERE rentals.item_id = #{item_id}
    SQL
    .first.rating.to_f
  end

  def pending_requests
    self.rentals.pending.order("start_date ASC").all
  end

  def currently_rented?
    # now = DateTime.now
    # self.rentals.approved.any? { |rental| rental >}
  end

  def history
    self.rentals.past.approved.order("end_date DESC").all
  end


end