json.extract!(
  comment,
  :id, :author_id, :body, :sin_id
)
json.author_image_url asset_path(comment.author.image.url(:thumb))
