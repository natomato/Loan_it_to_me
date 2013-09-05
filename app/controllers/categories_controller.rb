class CategoriesController < ApplicationController

  def index
    @categories = Category.all

    render :index
  end

  def create
    # TODO: make admin panel for this route
    @category = Category.new(params[:category])
    @category.save!

  end

  def new
    render :new
  end

  def update
  end

  def edit
  end

  def destroy
  end

  def show
    @items = Item.includes(:home).where("category_id = ?", params[:id]).all

    # render :index
    
    # render :json => "index.json.rabl"    
    respond_to do |format|
      # format.html
      format.json { render(:file => '../views/items/index.json.rabl') }
    end
  end
end
