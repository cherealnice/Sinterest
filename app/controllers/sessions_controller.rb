class SessionsController < ApplicationController
  # before_action :require_signed_out!, only: [:new, :create]
  # before_action :require_signed_in!, only: [:destroy]

  def new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      redirect_to :root
    else
      flash.now[:errors] = ["Invalid email/password combination."]
      render :new
    end

  end

  def destroy
    sign_out
    redirect_to new_session_url
  end
end
