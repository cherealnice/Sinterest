json.extract!(
  board,
  :id, :title, :description, :author
)

json.liked asset_path(!!board.users_liked.include?(current_user))
