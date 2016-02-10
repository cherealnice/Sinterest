class Api::SessionsController < ApplicationController

  def show
    unless current_user
      render json: {}
      return
    end

    @user = current_user
  end

  def create
    @user = User.find_by_credentials(
      params[:email],
      params[:password]
    )

    if @user.nil?
      @errors = ['Incorrect Login']
      render 'api/flash', status: 400
    else
      sign_in(@user)
      render "api/sessions/show"
    end
  end

  def destroy
    sign_out
    render json: {}
  end
end
