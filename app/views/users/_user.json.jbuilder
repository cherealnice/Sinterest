json.extract!(
  sin,
  :email, :username, :fname, :lname, :id
)
json.image_url asset_path(user.image.url(:medium))

# json.boards do
#   json.extract!(
#     sin.board,
#     :title, :id
#     )
# end
#
# if show_comments
#   json.comments do
#     json.array!(sin.comments) do |comment|
#       json.partial! 'api/comments/comment', comment: comment
#     end
#   end
# end
