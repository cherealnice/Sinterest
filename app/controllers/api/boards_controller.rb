class Api::BoardsController < ApplicationController

  def index
    @boards = Board.all
  end

  def show
    @board = Board.find(params[:id])

    if @board
      render :show
    else
      render status: 404
    end
  end

  def create
    @board = current_user.boards.new(board_params)

    if @board.save
      render :show
    else
      render @board.errors.full_messages, status: 422
    end
  end

  def board_params
    params.require(:board).permit(:title, :description, :author_id)
  end

end
