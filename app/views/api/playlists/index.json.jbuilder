@playlists.each do |playlist|
    json.set! playlist.id do
        json.extract! playlist, :id, :title, :genre, :creator_id, :description
        # json.partial! '/api/playlists/playlist', playlist: playlist
    end
end

#this is where we decide what our redux state looks like