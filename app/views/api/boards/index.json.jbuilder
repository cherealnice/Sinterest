json.array!(@boards) do |board|
    json.partial!('board_mini', board: board)
  end
