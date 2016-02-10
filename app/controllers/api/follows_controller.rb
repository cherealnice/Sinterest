class Api::FollowsController < ApplicationController

  def toggle
    id = follow_params[:id]
    type = follow_params[:type]
    @bool = true
    @follow = Follow.new({followable_id: id, followable_type: type})

    followTarget =
      current_user.follows.where({
        followable_id: id,
        followable_type: type
      }).first

    if follow_params[:followed] == 'true'
      unless followTarget
        current_user.follows.create!({
          followable_id: id,
          followable_type: type
        })
      end

    else
      followTarget && followTarget.destroy!
      @bool = false
    end

    render :show
  end

  private
  def follow_params
    params.require(:follow).permit(:id, :type, :followed)
  end
end
