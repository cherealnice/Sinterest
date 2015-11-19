
User.destroy_all
Sin.destroy_all
Board.destroy_all
Comment.destroy_all

User.create!(email: 'dcherouny@gmail.com', password: 'password')

20.times do
  Board.create!({
    author:   User.all[rand(0..User.all.length-1)],
    title:       Faker::Lorem.words(2),
    description: Faker::Hacker.say_something_smart
  })
end

50.times do
  Board.all[rand(0..Board.all.length-1)].sins.create!({
    title: Faker::Book.title,
    description: Faker::Lorem.sentence,
    link:  Faker::Internet.url,
    user:  User.all[rand(0..User.all.length-1)]
    })
end

100.times do
  Comment.create!({
    author: User.all[rand(0..User.all.length-1)],
    body:   Faker::Hacker.say_something_smart,
    sin:    Sin.all[rand(0..Sin.all.length-1)]
  })
end
