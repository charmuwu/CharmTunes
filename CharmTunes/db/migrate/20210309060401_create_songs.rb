class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :album
      t.string :title
      t.string :length
      t.string :artist
      t.timestamps
    end
  end
end
