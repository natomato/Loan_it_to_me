class ItemsController < ApplicationController
  def index
    @items = Item.where(category_id: params[:category_id]).all

    respond_to do |format|
      format.html
      format.json { render [:handlers] => :rabl }
    end
  end

  def create
    ActiveRecord::Base.transaction do
      if params[:photo].nil?
        params[:item][:main_photo_id] = 1
      else
        @item_photo = ItemPhoto.new(item_id: params[:item][:id], photo: params[:photo])
        @item_photo.save!
        params.delete :photo
        params[:item][:main_photo_id] = @item_photo.id
      end
      
      @item = Item.new(params[:item])
      @item.save!
    end

    render :json => @item
  end

  def new
    @item = Item.new
    @categories = Category.all
    @item_photo = ItemPhoto.new
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

    respond_to do |format|
      format.html
      format.json { render [:handlers] => :rabl }
    end
  end
end
