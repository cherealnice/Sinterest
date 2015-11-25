json.results do
  json.array! @search_results.map(&:searchable) do |result|
    if result.class == User
      json.partial! "api/users/user", user: result
      json._type "User"
    elsif result.class == Board
      json.partial! "api/boards/board_search", board: result
      json._type "Board"
    else
      json.partial!('api/sins/sin_search', sin: result, show_comments: false)
      json._type "Sin"
    end
  end
end
