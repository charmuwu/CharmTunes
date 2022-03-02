class Api::PlaylistsSongsController < ApplicationController
    def index
        @playlists_songs = Playsong.all
        if @playlists_songs
            render :index
        else
            render json: @playlists_songs.errors.full_messages, status: "422"
        end
    end
    def create
        
        @playlists_song = Playsong.new(playlist_song_params)
        if @playlists_song.save
            render json: :show
        else
            render json: @playlists_song.errors.full_messages, status: "422"
        end
    end

    def destroy
        playlist_song = Playsong.find_by(id: params[:id])
        #how do i delete if i only have the playlist_id and song_id? and how should i make that route???
        playlist_song.delete
        #render errors?
    end
    private
    def playlist_song_params
        params.require(:playsong).permit(:playlist_id,:song_id)
    end
end