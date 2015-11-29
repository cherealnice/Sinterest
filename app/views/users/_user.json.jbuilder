json.extract!(
  sin,
  :email, :username, :fname, :lname, :id
)
json.image_url asset_path(user.image.url(:medium))
