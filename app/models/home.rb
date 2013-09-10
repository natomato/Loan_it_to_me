class Home < ActiveRecord::Base
  attr_accessible :city, :latitude, :longitude, :state, :street, :zipcode, :address
  # attr_accessor :street, :city, :state, :zipcode
  validate :latitude, :longitude, presence: true

  has_one :user
  has_many :items
  
  # acts_as_gmappable :lat => 'latitude', :lng => 'longitude', :process_geocoding => :geocode?,
  #                 :address => "address", :normalized_address => "address",
  #                 :msg => "Sorry, not even Google could figure out where that is"

  def geocode?
    (!address.blank? && (latitude.blank? || longitude.blank?)) || address_change?
  end

  def address_change?
    false
  end

  # def gmaps4rails_address
  #   self.address
  # end
end
