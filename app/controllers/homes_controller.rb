class HomesController < ApplicationController
  include HomesHelper
  #require current user for new, show, create, and destroy
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
    current_user
    @home = Home.find(params[:id])
    @home_rentals = @home.all_rentals #TODO: this variable is here to make explicit the methods im using
    @item = Item.new              #TODO: remove the new item subform to a new page and delete this
    @categories = Category.all    #TODO: remove the new item subform to a new page and delete this

    render :show
  end
end
