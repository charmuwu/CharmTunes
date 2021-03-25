@songs.each do |song|
    json.set! song.id do
        json.extract! song, :id, :title, :album, :artist, :song_url, :artwork
    end
end

