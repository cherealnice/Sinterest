json.extract!(
  board,
  :id, :title, :description, :author
)

json.liked asset_path(!current_user.likes.includes({
    likeable_id: board.id, likeable_type: 'Board'
  }).empty?
)
