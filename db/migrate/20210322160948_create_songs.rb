class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :artist
      t.string :album
      t.string :length
      t.string :genre
      t.string :artwork
      t.string :song_url

      t.timestamps
    end
  end
end
