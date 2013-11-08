class RentalsController < ApplicationController
  def index
    @rentals = Item.find_by_id(params[:item_id]).rentals

    respond_to do |format|
      format.html
      format.json { render [:handlers] => :rabl }
    end
  end

  def create
  end

  def new
    @rental = Rental.new
    @rental.status = "pending"
    @rental.user_id = current_user.id
    render :new
  end

  def edit
  end

  def update
    @rental = Rental.find_by_id(params[:id])

    if params[:status] == "approved"
      @rental.approve!
      render :json => @rental
    elsif params[:status] == "undo"
      @rental.undo_approve!
      render :json => @rental
    else
      render :json => @rental.errors, :status => :unprocessable_entity
    end
  end

  def destroy
  end

  def show
  end
end
