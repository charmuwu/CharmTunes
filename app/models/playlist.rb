class Playlist < ApplicationRecord
    has_many :playsongs,
        foreign_key: :playlist_id,
        class_name: :Playsong

    has_many :songs,
        through: :playsongs,
        source: :song
        
    # belongs_to :creator, #user
    #     foreign_key: :user_id,
    #     class_name: :User
end