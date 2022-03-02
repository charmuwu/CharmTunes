# @songs.each do |song|
#     json.set! song.id do
#         json.extract! song, :id, :title, :artist, :album, :length, :genre, :artwork, :song_url
#     end
# end
# @playlists.each do |playlist|
#     json.set! playlist.id do
#         json.extract! playlist, :id, :title, :description, :genre, :creator_id
#     end
# end
# json.partial! '/api/playlists/playlist', playlist: @playlist
json.extract! @playlist, :id, :title, :genre, :creator_id, :description

json.set! "songs" do
    @playlist.songs.each do |song|
        json.set! song.id do 
            json.extract! song, :id, :title, :album, :artist, :song_url, :artwork
        end
    end
end