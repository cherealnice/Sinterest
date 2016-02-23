class Api::UsersController < ApplicationController

  def index
    @users = User.includes(:image).all
    render :index
  end

  def show
    @user = User.includes(:boards, :images).find(params[:id])
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
    @user = current_user
    @user.image = params[:image] unless params[:image] == 'null'

    user_edit_params.keys.each do |param|
      if user_edit_params[param].empty? ||
         user_edit_params[param] == @user[param]
        next
      elsif param == 'password'
        @user.password = user_edit_params[param]
      else
        @user[param] = user_edit_params[param]
      end
    end

    if @user.save
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

  def user_edit_params
    self.params.require(:user).permit(
      :email,
      :password,
      :username,
      :fname,
      :lname
    )
  end
end
