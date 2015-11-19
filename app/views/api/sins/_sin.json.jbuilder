json.extract!(
  sin,
  :title, :description, :link, :boards, :user_id, :id, :image
)
# json.image_url asset_path(sin.image.url(:medium)) .

# json.boards do
#   json.extract!(
#     sin.board,
#     :title, :id
#     )
# end

if show_comments
  json.comments do
    json.array!(sin.comments) do |comment|
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end
