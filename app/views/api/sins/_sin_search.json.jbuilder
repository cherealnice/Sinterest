json.extract!(
  sin,
  :title, :description, :id
)
json.image_url asset_path(sin.image.url(:medium))
