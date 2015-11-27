class Api::SinsController < ApplicationController

  def index
    if !params[:boardIds] || params[:boardIds].empty?
      if current_user.all_followed_boards_ids.empty?
        board_ids = Board.all.ids
      else
        board_ids = current_user.all_followed_boards_ids
      end
    else
      board_ids = params[:boardIds]
    end

    @sins = []

    boards = Board.includes(:sins).where({id: board_ids})

    boards.each { |board| @sins.concat(board.sins) }


    @sins = @sins.sort_by { |sin| sin.created_at }.reverse
    debugger
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
