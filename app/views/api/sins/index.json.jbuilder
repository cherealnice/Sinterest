json.array!(@sins) do |sin|
  json.partial!('sin', sin: sin, show_comments: false)
end
