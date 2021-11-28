class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def new
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      # redirect_to '/'
      render json: {
        status: :created,
        user: user

      }
    end
  end

  def create
    # user = User.new(user_params)
    # if user.save
    #   session[:user_id] = user.id
    #   # redirect_to '/'
    #   render json: {
    #     status: :created,
    #     user: user

    #   }

    user = User.create!(
      email: params['user']['email'],
      password: params['user']['password'])
    

    if user
      session[:user_id] = user.id
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
