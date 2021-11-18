class CreatePlaysong < ActiveRecord::Migration[5.2]
  def change
    create_table :playsongs do |t|
      t.integer :song_id, null: false
      t.integer :playlist_id, null: false
    end
  end
end
