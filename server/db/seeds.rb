# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Creating Pictures!"
User.destroy_all
Picture.destroy_all

User.create(username: 'test', email: 'test@test.com', password_digest: '$2a$04$kIOSD2KxSLqXa7ht1SoNaOinzwWU5V/gto6bXkj.9ahR96GeM4dBC')

Picture.create(description: 'Puma', img: 'https://2static.fjcdn.com/pictures/Derp+Picture_9720f6_6005436.jpg',user_id: 1)
Picture.create(description: 'Rosy', img: 'https://i.redd.it/6xvh1f7btgl31.jpg',user_id: 1)
Picture.create(description: 'Mr Buttons', img: 'https://live.staticflickr.com/1614/25492212465_7ff33b58bb_b.jpg',user_id: 1)
Picture.create(description: 'Luna', img: 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg',user_id: 1)