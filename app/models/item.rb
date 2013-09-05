class Item < ActiveRecord::Base
  attr_accessible :avg_rating, :category_id, :description, :home_id, :name, :price
  validate :category_id, :home_id, :name, presence: true
  
  belongs_to :home
  belongs_to :category
  has_one :owner, through: :home, source: :user
  has_many :photos, class_name: "ItemPhoto", foreign_key: :item_id
  has_many :rentals
  has_many :reviews, through: :rentals, source: :review
  
  def pending_requests
    self.rentals.select { |rental| rental.status = "pending" }
  end

  def currently_rented?
    # now = DateTime.now
    # self.rentals.approved.any? { |rental| rental >}
  end

  def history
    #self.rentals.approved.select
  end
end
