# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
sins = Sin.create([{title: 'Rock and Roll', description: 'It is awesome', link: 'http://www.google.com', board_id: 1, user_id: 1},
                   {title: 'Alcohol', description: 'It is also fun', link: 'http://www.reddit.com', board_id: 1, user_id: 1}])
