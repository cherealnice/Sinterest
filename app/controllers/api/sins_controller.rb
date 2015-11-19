class Api::SinsController < ApplicationController

  def index
    if !params[:boardIds] || params[:boardIds].empty?
      @sins = Sin.all
    else
      @sins = []
      params[:boardIds].each do |board_id|
        @sins.concat(Board.find(board_id).sins.to_a)
      end
    end
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
    @sin.sin_boards.new(board: Board.find(params[:board_id]))
    if @sin.save
      render :show
    else
      render @sin.errors.full_messages, status: 422
    end
  end

  def sin_params
    params.require(:sin).permit(:title, :image, :description, :link)
  end

end
