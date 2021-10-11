class ChangePlaylists < ActiveRecord::Migration[5.2]
  def change
    add_column :playlists, :description, :text
    add_column :playlists, :artwork, :string
    change_column_null :playlists, :title, false
  end
end
