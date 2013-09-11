module SessionsHelper

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def logged_in?
    !!@current_user
  end

  #TODO: remove print
  def require_login
    p ['require login', current_user]
    unless logged_in?
      flash[:errors] ||= []
      flash[:errors] << "You must be logged in to access this resource"
      redirect_to new_session_url
    end
  end
end
