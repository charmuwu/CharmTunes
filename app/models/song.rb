class Song < ApplicationRecord
    has_one_attached :song
    belongs_to :playlist,
        class_name: :Playlist
end
