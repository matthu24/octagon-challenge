class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 401

    end
  end

  def show
    @user = User.find(params[:id])
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
  end

  def user_params
    params.require(:user).permit(:first_name,:last_name,:email,:zip,:state)
  end
end
