# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Category.destroy_all
Tag.destroy_all

20.times do
  User.create!(
    first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: "secret"
  )
  Category.create!(title: Faker::Book.unique.genre, description: Faker::Quote.famous_last_words)
  Tag.create!(title: Faker::Music.unique.band, description: Faker::Music.album)
end