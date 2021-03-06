
User.destroy_all
Sin.destroy_all
Board.destroy_all
Comment.destroy_all

User.create!(email: 'dcherouny@gmail.com', image: File.open(File.join(Rails.root, "/app/assets/images/missing.png")), password: 'password', fname: 'Dan', lname: 'Cherouny')

guest = User.new(email: 'guest@guest.io', password: 'password', fname: 'Steve', lname: 'Jobs')
guest.images.new
guest.save!

20.times do
  number = rand(1...60)
  User.create!(email: Faker::Internet.email, image: File.open(File.join(Rails.root, "/app/assets/images/seed_images/#{number}.jpg")), password: 'password', fname: Faker::Name.first_name, lname: Faker::Name.last_name)
end

50.times do
  Board.create!({
    author:      User.all[rand(0..User.all.length-1)],
    title:       Faker::Company.buzzword,
    description: Faker::Hacker.say_something_smart
  })
end

300.times do
    number = rand(1...60)
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
User.find_by(email: 'guest@guest.io').followed_boards = Board.all
