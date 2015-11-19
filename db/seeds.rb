
User.destroy_all
Sin.destroy_all
Board.destroy_all
Comment.destroy_all

User.create!(email: 'dcherouny@gmail.com', image: File.open(File.join(Rails.root, "/app/assets/images/missing.png")), password: 'password')

10.times do
  number = rand(1...8)
  User.create!(email: Faker::Internet.email, image: File.open(File.join(Rails.root, "/app/assets/images/seed_images/#{number}.jpg")), password: 'password')
end

20.times do
  Board.create!({
    author:   User.all[rand(0..User.all.length-1)],
    title:       Faker::Lorem.word,
    description: Faker::Hacker.say_something_smart
  })
end

50.times do
    number = rand(1...8)
  Board.all[rand(0..Board.all.length-1)].sins.create!({
    image: File.open(File.join(Rails.root, "/app/assets/images/seed_images/#{number}.jpg")),
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
