class Playsong < ApplicationRecord
    validates :playlist_id, :song_id, null: false 
    
    belongs_to :song,
        foreign_key: :song_id,
        class_name: :Song
        
    belongs_to :playlist,
        foreign_key: :playlist_id,
        class_name: :Playlist
end