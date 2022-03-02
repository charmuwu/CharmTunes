class Api::PlaylistsController < ApplicationController
    def index
        @playlists = Playlist.where(creator_id: current_user.id)
        render :index
    end
    def show
        @playlist = Playlist.find_by(id: params[:id])
        render :show
    end
    def create 
        @playlist = Playlist.new(playlist_params)
        @playlist.creator_id = current_user.id
        if @playlist.save
            render :show
        else
            render json: @playlist.errors.full_messages, status: "422"
        end
    end
    def update
        #find playlist on the params
        @playlist = Playlist.find_by(id: params[:id])
        if current_user.id == @playlist.creator_id
            #owner of playlist can update stuff
            @playlist.update(title: params[:playlist][:title], 
                description: params[:playlist][:description],
                artwork: params[:playlist][:artwork],
                genre: params[:playlist][:genre])
                
            render :show
        else
            render json: @playlist.errors.full_messages, status: "422"
        end
    end
    def destroy
        @playlist = Playlist.find_by(id: params[:id])
        if current_user.id == @playlist.creator_id
            @playlist.delete
            render :show
        else
            render json: @playlist.errors.full_messages, status: "422"
        end
    end

    private
    def playlist_params
        params.require(:playlist).permit(:title, :genre, :description, :artwork)
    end
end