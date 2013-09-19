class HomesController < ApplicationController
  include HomesHelper
  #TODO: prevent current user from editing someone elses home
  before_filter :require_login, except: [:index]

  def index
    @cat_id = params[:category_id]
    @homes = Home.by_category(@cat_id)

    respond_to do |format|
      # format.html
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

  #TODO: allow user to type in address to autofill the address form using AJAX
  def geocode

  end

  def update
  end

  def show
    # TODO: simplify!
    if current_user.home #&& current_user.home.id == params[:id]
      @home = current_user.home
      @items = @home.items
      @home_items_requests = @home.items_with_requests
      # TODO: join the item_photos table to reduce DB queries
      
      # @home_rentals = @home.all_rentals #TODO: this variable is here to make explicit the methods im using
      # @item = Item.new              #TODO: remove the new item subform to a new page and delete this
      # @categories = Category.all    #TODO: remove the new item subform to a new page and delete this
      respond_to do |format|
        format.html
        format.json { render :json => @home_items_requests }
      end 
    else
      #flash error, you do not have permission to access this home
      redirect_to new_home_url
    end
  end
end
