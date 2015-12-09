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
      @errors = @user.errors.full_messages
      render 'api/flash', status: 400
    end
  end

  def update
    debugger;
    @user = current_user
    @user.images.new
    if @user.save
      sign_in(@user)
      render :show
    else
      @errors = @user.errors.full_messages
      render 'api/flash', status: 400
    end
  end


  private

  def user_params
    self.params.require(:user).permit(:email, :password)
  end
end
