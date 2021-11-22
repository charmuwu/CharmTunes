class Api::PlaylistsSongsController < ApplicationController
    def index
        # playlist = Playlist.find_by(id: params[:playlist_id])
        @playlists_songs = Playsong.where("playlist_id = #{params[:playlist_id]}")
        render :index
    end
    def create
        # song = Song.find_by(id: params[:songid])
        # playlist = Playlist.find_by(id: params[:playlistid])
        @playlist_song = Playsong.new(
            playlist_song_params
            # playlist_id: @playlist.id,
            # song_id:  @song.id
        )
        if @playlist_song.save
            render :show
        else
            render json: @playlist_song.errors.full_messages, status: "422"
        end
    end

    def destroy
        playlist_song = Playsong.find_by(id: params[:id])
        playlist_song.delete
        #render index?
        #render errors?
    end
    private
    def playlist_song_params
        params.require(:playsong).permit(:playlist_id,:song_id)
    end
end