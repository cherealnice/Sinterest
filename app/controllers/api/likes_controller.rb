class Api::LikesController < ApplicationController

  def toggle
    id = like_params[:id]
    type = like_params[:type]
    @like = Like.new({likeable_id: id, likeable_type: type})

    likeTarget =
      current_user.likes.where({
        likeable_id: id,
        likeable_type: type
      }).first

    if like_params[:liked] == 'true'

      unless likeTarget
        current_user.likes.create!({
          likeable_id: id,
          likeable_type: type
        })
      end

    else
      likeTarget && likeTarget.destroy!
    end

    render :show
  end

  private
  def like_params
    params.require(:like).permit(:id, :type, :liked)
  end
end
