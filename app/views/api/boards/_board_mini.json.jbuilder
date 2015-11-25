json.extract!(
  board,
  :id, :title, :author_id
)
json.author_username (board.author.username)
json.images board.sins[(0..3)].map { |sin| asset_path(sin.image.url(:thumb)) }
json.followed (current_user.follows?(board))
