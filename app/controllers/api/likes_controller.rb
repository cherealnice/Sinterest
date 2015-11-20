class Api::LikesController < ApplicationController

  def create

    id = like_params[:id]
    type = like_params[:type]
      like =
      current_user.likes.where!({likeable_id: id, likeable_type: type}).first

    if like_params[:liked] == 'true'

      like_params[:liked]

      unless like
        current_user.likes.create!({
          likeable_id: id,
          likeable_type: type
        })
      end

    else
      like && like.destroy!
    end
  end

  private
  def like_params
    params.require(:like).permit(:id, :type, :liked)
  end
end
