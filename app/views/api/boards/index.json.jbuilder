json.array!(@boards) do |board|
  json.partial!('board', board: board)

  json.sins do
    json.array!(board.sins) do |sin|
      json.partial! 'api/sins/sin_mini', sin: sin
    end
  end
end
