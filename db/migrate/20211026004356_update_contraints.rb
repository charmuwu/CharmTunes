class UpdateContraints < ActiveRecord::Migration[5.2]
  def change
    change_column_null :playlists, :creator_id, false
  end
end
