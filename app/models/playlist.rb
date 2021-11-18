class Playlist < ApplicationRecord
    has_many :playsongs

    has_many :songs,
        through: :playsongs
        
    # belongs_to :creator, #user
    #     foreign_key: :user_id,
    #     class_name: :User
end