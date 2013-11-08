require 'rest-client'
require 'addressable/uri'
require 'json'

module HomesHelper

  def get_lat_lng(location)
    url = Addressable::URI.new(
      :scheme => "https",
      :host => "maps.googleapis.com",
      :path => "/maps/api/geocode/json",
      :query_values => { :address => location, :sensor => "false" }    
    ).to_s
    
    response = JSON.parse(RestClient.get(url))
    top_result = response["results"].first
    top_result["geometry"]["location"].values_at("lat", "lng")

  end

  def get_address(lat, lng)
    pos = lat.to_s + ',' + lng.to_s
    p ['helper method pos ----------->', pos]

    url = Addressable::URI.new(
      :scheme => "https",
      :host => "maps.googleapis.com",
      :path => "/maps/api/geocode/json",
      :query_values => { latlng: pos, :sensor => "false" }    
    ).to_s
    
    response = JSON.parse(RestClient.get(url))
    results = response["results"].first
    results["formatted_address"]

  end
end
