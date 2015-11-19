
User.destroy_all
Sin.destroy_all
Board.destroy_all
Comment.destroy_all

User.create!(email: 'dcherouny@gmail.com', password: 'password')

20.times do
  Board.create({
    author_id:   User.all[rand(0..User.all.length)],
    title:       Faker::Team.sport,
    description: Faker::Hacker.say_something_smart
  })
end

50.times do
  Sin.create({
    board: Board.all[rand(0..Board.all.length)],
    title: Faker::Book.title,
    link:  Faker::Internet.url,
    user:  User.all[rand(0..User.all.length)]
    })
end

100.times do
  Comment.create({
    author: User.all[rand(0..User.all.length)],
    body:   Faker::Hacker.say_something_smart,
    sin:    Sin.all[rand(0..Sin.all.length)]
  })
end
