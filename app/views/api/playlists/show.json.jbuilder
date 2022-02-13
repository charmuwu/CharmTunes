@songs.each do |song|
    json.set! song.id do
        json.extract! song, :id, :title, :artist, :album, :length, :genre, :artwork, :song_url
    end
end
