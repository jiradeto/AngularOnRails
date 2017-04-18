# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do |i|
  pic_url = if i.even?
						'https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?ixlib=rb-0.3.5&q=100&fm=jpg&crop=entropy&cs=tinysrgb&s=546c9fc7349fceeb102ed9e6ff7206c6'
					else
						'http://wefunction.com/wordpress/wp-content/uploads/2013/10/tumblr_ms9mpnB2o61st5lhmo1_1280.jpg'
					end
					

  Photo.create!(
    title: "Photo number #{i}",
    url: pic_url,
    description: '',
    price: (1000 + (12 * i))
  )
end

