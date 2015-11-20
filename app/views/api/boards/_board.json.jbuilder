json.extract!(
  board,
  :id, :title, :description, :author
)

json.liked (board.users_liked.include?(current_user))
