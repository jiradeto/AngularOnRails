
Photo.create!(
  title: 'Photo AAA',
  url: 'https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?ixlib=rb-0.3.5&q=100&fm=jpg&crop=entropy&cs=tinysrgb&s=546c9fc7349fceeb102ed9e6ff7206c6',
  description: 'hello world',
  price: 1_400_000
)

Photo.create!(
  title: 'Photo BBB',
  url: 'http://wefunction.com/wordpress/wp-content/uploads/2013/10/tumblr_ms9mpnB2o61st5lhmo1_1280.jpg',
  description: 'hello world',
  price: 350_000
)

Photo.create!(
  title: 'Photo CCC',
  url: 'https://s3.amazonaws.com/s3.imagefinder.co/uploads/2016/02/09103722/unsplash-com-photo-1453952399250-ab1d2ed44976-880x587.jpg',
  description: 'hello world',
  private: true,
  price: 100_000_000
)

Photo.create!(
  title: 'Photo DDD',
  url: 'https://images.unsplash.com/30/ny-filtered.jpg',
  description: 'hello world',
  price: 10_000
)

Photo.create!(
  title: 'Photo ZZZ',
  url: 'https://joskibyrne.files.wordpress.com/2015/07/woman-in-the-woods-unsplash.jpeg',
  description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  price: 1_230_000,
  private: true
)
