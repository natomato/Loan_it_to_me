class ItemsController < ApplicationController
  def index
    @items = Item.where(category_id: params[:category_id]).all

    #render(:file => '../views/items/index.json.rabl')
    # render :json => "index.json.rabl"    
    respond_to do |format|
      format.html
      format.json { render [:handlers] => :rabl }
    end
  end

  def create
    @item = Item.new(params[:item])
    @item.save!

    render :json => @item
  end

  def new
    @item = Item.new


    render :new
  end

  def update
  end

  def edit
  end

  def destroy
  end

  def show
    @item = Item.find(params[:id])
    @item_photo = [ItemPhoto.new(item_id: @item.id)]
    p ['item.photo', @item.photos]
    p ['item_photo', @item_photo]

    # not using the json
    respond_to do |format|
      format.html
      format.json { render [:handlers] => :rabl }
    end
  end
end
