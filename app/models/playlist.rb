class Playlist < ApplicationRecord
    has_many :songs,
        foreign_key: :playlist_id,
        class_name: :Song
    # belongs_to :creator, #user
    #     foreign_key: :user_id,
    #     class_name: :User
end