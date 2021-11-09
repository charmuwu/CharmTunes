class Api::PlaylistsSongsController < ApplicationController
    # def index
    #     @playlists_songs = PlaylistSong.all
    #     render :index
    # end

    # def show
    #     @playlist_song = PlaylistSong.find_by(id: params[:id]) 
    #     render :show
    # end

    def create
        @song = Song.find_by(id: 
        #?
        )
        @playlist = Playlist.find_by(id: 
        #?
        )

        @playlist_song = PlaylistSong.new(
            playlist_id: @playlist.id,
            song_id:  @song.id
        )

        if @playlist_song.save
            render :show
        else
            render json: @playlist_song.errors.full_messages, status: "422"
        end
    end

    # def update
    #     @playlist_song = PlaylistSong.find_by(id: params[:id])
    #     @playlist_song.update(
    #         # do we need an update if we can just delete and create?
    #     )
    # end

    def destroy
        @playlist_song = PlaylistSong.find_by(id: params[:id])
        @playlist_song.delete
        #render index?
        #render errors?
    end

    
end