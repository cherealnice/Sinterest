json.array!(@sins) do |sin|
  json.partial!('sin', sin: sin)
end
