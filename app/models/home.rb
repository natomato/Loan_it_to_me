class Home < ActiveRecord::Base
  attr_accessible :city, :latitude, :longitude, :state, :street, :zipcode, :address
  validate :latitude, :longitude, presence: true
  
  has_one :user
  has_many :items
  
  def self.by_category(cat_id)
    Home.joins(:items).where("category_id = ?", cat_id).group("homes.id").all
  end

  def items_by_category(cat_id)
    self.items.where("category_id = ?", cat_id ).all
  end

  #return a home with array of items 
  #each with array of pending requests with a username
  def items_with_requests()
    self.as_json({
      include: {
        :items => {
          include: {
            :pending_requests => {
              include: {
                :user => {
                  :only => [:username, :id]
                }
              }
            }
          }
        }
      }
    })

  end

  def all_rentals
    all_rentals = []
    self.items.each do |item|
      all_rentals.concat( item.rentals )
    end
    all_rentals
  end 


end
