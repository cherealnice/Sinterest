class Api::SinsController < ApplicationController

  def index
    if !params[:boardIds] || params[:boardIds].empty?
      board_ids = current_user.all_followed_boards_ids

      if board_ids.empty?
        board_ids = Board.all.ids
      end

    else
      board_ids = params[:boardIds]
      board_ids = board_ids.map(&:to_i)
    end

    offset = params[:offset].to_i

    @sins = Sin
      .limit(25)
      .offset(offset)
      .joins(:boards)
      .where(boards: {id: board_ids})
      .includes(:boards, :images, :user, :users_liked)
      .order(created_at: :asc)
  end

  def show
    @sin = Sin
      .includes(:images, :comments, :users_liked, :boards)
      .find(params[:id])

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
      @errors = @sin.errors.full_messages
      render 'api/flash', status: 400
    end
  end

  def sin_params
    params.require(:sin).permit(:title, :image, :description, :link)
  end

end
