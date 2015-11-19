json.partial!('board', board: @board)
json.author_image_url asset_path(@board.author.image.url(:thumb))
