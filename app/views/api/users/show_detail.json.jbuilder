json.extract! @user, :id, :username, :fname, :lname, :email
json.image_url asset_path(@user.image.url(:thumb))
json.boards @user.boards.map { |board| {id: board.id, title: board.title} }
