class Song < ApplicationRecord
    # has_many :playlists_songs

    has_one_attached :song

    # belongs_to :playlist,
    #     foreign_key: :playlist_id,
    #     class_name: :Playlist
end
