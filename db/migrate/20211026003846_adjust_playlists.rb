class AdjustPlaylists < ActiveRecord::Migration[5.2]
  def change
    remove_column :playlists, :song_id
    remove_column :playlists, :creator
    add_column :playlists, :creator_id, :integer
    change_column_null :playlists, :creator_id, :false
  end
end
