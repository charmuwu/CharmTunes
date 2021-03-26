# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Song.destroy_all

ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('songs')

User.create(username: 'demo', email: 'demo', password: 123456);

Song.create(title: 'Fukashigi no Karte - Sax',artist: 'Soneji', genre: 'testre', album: 'yes', song_url: 1, artwork: 1)
Song.create(title: 'walk but in a garden', artist: 'LLusion', genre: 'lo-fi', album: 'walk but in a garden', song_url: 2, artwork: 2)
Song.create(title: 'Pure Thoughts', artist: 'Kondor', genre: 'other', album: 'Beyond The Clouds')
Song.create(title: 'Melody', artist: 'FreeTEMPO', genre:'other', album: 'TENSE')