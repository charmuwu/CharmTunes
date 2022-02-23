# json.extract! @playlist_song, :playlist_id,:song_id
@playlist_songs.each do |playsong|
    json.set! playsong.id do
        json.extract! playsong, :playlist_id,:song_id
    end
end
