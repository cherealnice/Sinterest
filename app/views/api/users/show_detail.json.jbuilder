json.extract! @user, :id, :username, :fname, :lname, :email
json.image_url asset_path(@user.image.url(:thumb))
json.boards do
    json.array! @user.boards do |board|
    json.extract! board, :id, :title
  end
end
