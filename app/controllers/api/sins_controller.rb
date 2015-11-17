class Api::SinsController < ApplicationController

  def index
    @sins = Sin.all
  end

  def show
    @sin = Sin.find(params[:id])

    if @sin
      render :show
    else
      render status: 404
    end
  end

  def create
    @sin = current_user.sins.new(sin_params)

    if @sin.save
      render :show
    else
      render @sin.errors.full_messages, status: 422
    end
  end

  def sin_params
    params.require(:sin).permit(:title, :description, :board_id, :link)
  end

end
