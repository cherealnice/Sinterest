class Api::CommentsController < ApplicationController

  def create
    @comment = current_user.comments.new(comment_params)

    if @comment.save
      render :show
    else
      @errors = @comment.errors.full_messages
      render 'api/flash', status: 400
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :sin_id)
  end
end
