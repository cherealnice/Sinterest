# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Sin.destroy_all
Board.destroy_all
Comment.destroy_all

User.create!(email: 'dcherouny@gmail.com', password: 'password')
boards = [Board.create({author_id: User.first.id, title: 'Music'}), Board.create({author_id: User.first.id, title: 'Libations'})]

sins = [Sin.create({board: Board.first, user: User.first, title: 'hello, world', description: 'This is fun!'})]
