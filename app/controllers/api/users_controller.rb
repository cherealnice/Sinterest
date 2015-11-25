class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)
    @user.images.new
    if @user.save
      sign_in(@user)
      render :show
    else
      render @user.errors.full_messages
    end
  end


  private

  def user_params
    self.params.require(:user).permit(:email, :password)
  end
end
