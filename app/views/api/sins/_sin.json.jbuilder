json.extract!(
  sin,
  :title, :description, :link, :user_id, :board_id, :id
)

if show_comments
  json.comments do
    json.array!(sin.comments) do |comment|
      json.partial! 'comments/comment', comment: comment
    end
  end
end
