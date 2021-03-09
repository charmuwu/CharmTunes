class CreateArtist < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.integer :song_id
      t.integer :album_id
      t.string 
    end
  end
end
