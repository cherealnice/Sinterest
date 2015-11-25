json.extract!(
  board,
  :id, :title, :description, :author, :author_id
)

json.liked (board.users_liked.include?(current_user))
json.followed (board.users_following.include?(current_user))
