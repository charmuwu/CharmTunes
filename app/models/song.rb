class Song < ApplicationRecord
    has_many :playsongs,
        foreign_key: :song_id,
        class_name: :Playsong

    has_one_attached :song

    has_many :playlists,
        through: :playsongs,
        source: :playlist
    # belongs_to :playlist,
    #     foreign_key: :playlist_id,
    #     class_name: :Playlist
end
