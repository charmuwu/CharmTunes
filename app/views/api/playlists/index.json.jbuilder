@playlists.each do |playlist|
    json.set! playlist.id do
        json.extract! playlist, :id, :title, :genre, :user #creator?
    end
end

#this is where we decide what our redux state looks like