class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def new
  
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      # redirect_to '/'
      render json: {
        status: :created,
        user: user

      }
    else
      # redirect_to '/register'
      render json: { status: 500 }
    end
  end
  
end
