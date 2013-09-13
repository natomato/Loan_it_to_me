class SessionsController < ApplicationController

  def create
    @user = User.find_by_username(params[:username])

    if @user && @user.authenticate(params[:password])
      login!(@user)
      redirect_to user_url(@user)
    else
      flash[:errors] ||= []
      flash[:errors] << "Username or password not found" 
      redirect_to new_session_url
    end
  end

  def new
    render :new
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    redirect_to new_session_url
  end
end
