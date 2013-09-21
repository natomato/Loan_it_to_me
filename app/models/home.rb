class Home < ActiveRecord::Base
  attr_accessible :city, :latitude, :longitude, :state, :street, :zipcode, :address
  # attr_accessor :street, :city, :state, :zipcode
  validate :latitude, :longitude, presence: true
  
  has_one :user
  has_many :items
  
  def self.by_category(cat_id)
    Home.joins(:items).where("category_id = ?", cat_id).group("homes.id").all
  end

  # TODO: remove, instead using a category scope on item
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

    # inventory.map do |item|
    #   requests = { requests: 
    #     item.pending_requests.map do |req|
    #       user = { username: req.user.username }
    #       req.attributes.merge(user)
    #     end
    #   }
    #   item.attributes.merge(requests)
    # end
  end

  # def geocode?
  #   (!address.blank? && (latitude.blank? || longitude.blank?)) || address_change?
  # end

  # def address_change?
  #   false
  # end


  #TODO: remove, I am using a RABL template instead and dont need this
  def all_rentals
    all_rentals = []
    self.items.each do |item|
      all_rentals.concat( item.rentals )
    end
    all_rentals
  end 


end
