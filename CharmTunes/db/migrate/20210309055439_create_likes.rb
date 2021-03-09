class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.string :user_id
      t.string :playlist_id
      t.string :song_id

      t.timestamps
    end
    
    

    add_index :likes, :user_id
    add_index :likes, [:playlist_id, :user_id], unique: true
    add_index :likes, [:song_id, :user_id], unique: true
  end
end
