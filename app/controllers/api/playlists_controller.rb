class Api::PlaylistsController < ApplicationController
    def index
        @playlists = Playlist.all
        render :index
    end
    def show
        @playlist = Playlist.find_by(id: params[:id])
        render :show
    end
    def create 
        @playlist = Playlist.new(playlist_params)
        if @playlist.save

            render :show
        else
            
            render json: @playlist.errors.full_messages, status: "422"
        end
    end
    private
    def playlist_params
        params.require(:playlist).permit(:title,:genre) #add in description after
    end
end