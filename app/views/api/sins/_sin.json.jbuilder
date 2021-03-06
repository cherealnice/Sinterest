json.extract!(
  sin,
  :title, :description, :link, :boards, :user_id, :id
)
json.image_url asset_path(sin.image.url(:medium))
json.liked (sin.users_liked.include?(current_user))


if show_comments
  json.comments do
    json.array!(sin.comments.sort_by { |c| c.created_at }) do |comment|
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end
