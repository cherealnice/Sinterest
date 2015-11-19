class Api::LikesController < ApplicationController

  def create

    id = like_params[:id]
    type = like_params[:type]

    if like_params[:liked]

      like_params[:liked]
      like =
      current_user.likes.where!({likeable_id: id, likeable_type: type}).first

      unless like
        debugger;
        current_user.likes.create!({
          likeable_id: id,
          likeable_type: type
        })
      end

    else
      like && like.destroy
    end
  end

  private
  def like_params
    params.require(:like).permit(:id, :type, :liked)
  end
end
