
User.destroy_all
Sin.destroy_all
Board.destroy_all
Comment.destroy_all

User.create!(email: 'dcherouny@gmail.com', image: File.open(File.join(Rails.root, "/app/assets/images/missing.png")), password: 'password')

50.times do
  number = rand(1...35)
  User.create!(email: Faker::Internet.email, image: File.open(File.join(Rails.root, "/app/assets/images/seed_images/#{number}.jpg")), password: 'password')
end

100.times do
  Board.create!({
    author:      User.all[rand(0..User.all.length-1)],
    title:       Faker::Company.buzzword,
    description: Faker::Hacker.say_something_smart
  })
end

300.times do
    number = rand(1...35)
  Board.all[rand(0..Board.all.length-1)].sins.create!({
    image: File.open(File.join(Rails.root, "/app/assets/images/seed_images/#{number}.jpg")),
    title: Faker::Book.title,
    description: Faker::Company.catch_phrase,
    link:  Faker::Internet.url,
    user:  User.all[rand(0..User.all.length-1)]
    })
end

300.times do
  Comment.create!({
    author: User.all[rand(0..User.all.length-1)],
    body:   Faker::Hacker.say_something_smart,
    sin:    Sin.all[rand(0..Sin.all.length-1)]
  })
end

User.all.each do |user|
  board_ids = Board.all.ids
  8.times do
    next if User == User.first
    num = rand(1...board_ids.length)
    next if user.followed_boards.ids.include?(num)
    user.follows.create!({followable_id: num, followable_type: 'Board'})
  end
end

User.first.followed_boards = Board.all
