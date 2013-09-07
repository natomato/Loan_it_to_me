class UsersController < ApplicationController
  def index
  end

  def create
    @user = User.new(params[:user])
    # @user.reset_session_token!

    if @user && @user.save
      login!(@user)
      redirect_to user_url(@user)
    else
      flash[:errors] << @user.errors.full_messages
      redirect_to new_user_url
    end
  end

  def edit
  end

  def update
  end

  def new
    render :new
  end

  def destroy
  end

  def show
    @user = current_user
  end
end
