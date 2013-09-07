class RentalReview < ActiveRecord::Base
  attr_accessible :author_id, :body, :rating, :rental_id, :title
  validate :author_id, :body, :rental_id, presence: true

  belongs_to :author, class_name: "User", foreign_key: :author_id
  belongs_to :rental
  has_one :item, through: :rental, source: :item


end
