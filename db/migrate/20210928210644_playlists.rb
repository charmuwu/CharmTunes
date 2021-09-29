class Playlists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.integer :song_id
      t.string :title
      t.string :creator
      t.string :genre

      t.timestamps
    end
  end
end
