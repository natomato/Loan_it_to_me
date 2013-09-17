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
  def inventory()
    self.as_json({
      include: {
        :items => {
          include: :main_photo
          
          # include: {
          #   :pending_requests => {
          #     include: {
          #       :user => {
          #         :only => [:username, :id]
          #       }
          #     }
          #   }
          # }
        }
      }
    })

    # user.as_json(
    #   include: { 
    #     posts: {
    #       include: { 
    #         comments: {
    #           only: :body } 
    #         },
    #         only: :title
    #     } 
    #   }
    # )

    # inventory = self.items

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



    
  # Home.joins( items: [ :main_photo, { rentals: :user }])

  # homes = Home.find_by_sql(<<-SQL)
  #   SELECT *
  #   FROM homes JOIN items
  #   ON homes.id = items.home_id
  #   WHERE items.category_id = #{cat_id}
  #   GROUP_BY homes.id
  # SQL

  # homes.each do |home|
  #   home.items #map.. cat_id
  # end

  # acts_as_gmappable :lat => 'latitude', :lng => 'longitude', :process_geocoding => :geocode?,
  #                 :address => "address", :normalized_address => "address",
  #                 :msg => "Sorry, not even Google could figure out where that is"

  # def geocode?
  #   (!address.blank? && (latitude.blank? || longitude.blank?)) || address_change?
  # end

  # def address_change?
  #   false
  # end

  # def gmaps4rails_address
  #   self.address
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
