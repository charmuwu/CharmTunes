class Playlist < ApplicationRecord
    has_many :songs,
        foreign_key: :song_id,
        class_name: :Song
    belongs_to :user,
        class_name: :User
end