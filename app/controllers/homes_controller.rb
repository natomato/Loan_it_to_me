class HomesController < ApplicationController
  include HomesHelper
  before_filter :require_login, except: [:index]

  def index
    @cat_id = params[:category_id]
    @homes = Home.by_category(@cat_id)
    
    respond_to do |format|
      format.json { render [:handlers] => :rabl }
    end
  end

  def create

    pos = get_lat_lng(params[:home][:address])
    @home = Home.create(latitude: pos[0], longitude: pos[1])
    current_user.home_id = @home.id
    redirect_to home_url(@home)
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
    if current_user.home
      @home = current_user.home
      @items = @home.items
      @home_items_requests = @home.items_with_requests

      respond_to do |format|
        format.html
        format.json { render :json => @home_items_requests }
      end 
    else
      redirect_to new_home_url
    end
  end
end
