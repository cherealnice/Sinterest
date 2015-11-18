json.extract!(
  sin,
  :title, :description, :link, :board_id, :user_id, :id
)

json.board do
  json.extract!(
    sin.board,
    :title, :id
    )
end

if show_comments
  json.comments do
    json.array!(sin.comments) do |comment|
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end
