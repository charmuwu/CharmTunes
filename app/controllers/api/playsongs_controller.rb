class Api::PlaylistsSongsController < ApplicationController
    def show
        # playlist = Playlist.find_by(id: params[:playlist_id])
        @playlists_songs = Playsong.where("playlist_id = #{params[:playlist_id]}")
        if @playlists_songs
            render :show
        else
            render json: @playlists_songs.errors.full_messages, status: "422"
        end
    end
    #do i need playsong index??? i don't think so?
    def create
        @playlist_song = Playsong.new(
            playlist_song_params
            # playlist_id: @playlist.id,
            # song_id:  @song.id
        )
        if @playlist_song.save
            render json: @playlist_song, :playlist_id, :song_id
            # render :show
        else
            render json: @playlist_song.errors.full_messages, status: "422"
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