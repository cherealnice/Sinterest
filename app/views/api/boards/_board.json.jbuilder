json.extract!(
  board,
  :id, :title, :description, :author_id
)

json.author do
  json.partial! 'api/users/user', user: board.author
end

json.liked (board.users_liked.include?(current_user))
json.followed (board.users_following.include?(current_user))
