class HomesController < ApplicationController
  def create
    @home = Home.create(params[:home])
    
  end

  def new
    @home = Home.new
  end

  def destroy
  end

  def edit
  end

  def update
  end

  def show
    current_user
    @home = Home.find(params[:id])
    @home_loc = @home.to_json
    @json = Home.all.to_gmaps4rails do |home, marker|
      marker.json({ :id => home.id, :address => home.address })
    end
    
    p ['home', @home]
    p ['home_loc', @home_loc]
    p ['json', @json]
  end
end
