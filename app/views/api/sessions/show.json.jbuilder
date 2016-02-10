json.extract! @user, :id, :username, :fname, :lname, :email
json.image_url asset_path(@user.image.url(:thumb))
json.boards do
    json.array! @user.boards do |board|
    json.extract! board, :id, :title
  end
end

json.followed_boards do
  json.array! @user.followed_boards.each do |board|
    json.extract! board, :id
  end
end

json.followed_users do
  json.array! @user.followed_users.each do |user|
    json.extract! user, :id
  end
end
