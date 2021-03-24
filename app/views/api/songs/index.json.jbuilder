json.songs do 
    @users.songs.each do |song|
        json.set! song.id do
            json.extract! song, :id, :title, :album, :artist
        end
    end
end
