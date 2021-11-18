class Playlist < ApplicationRecord
    # has_many :playlists_songs

    has_many :songs,
        through: :playlists_songs
        
    # belongs_to :creator, #user
    #     foreign_key: :user_id,
    #     class_name: :User
end