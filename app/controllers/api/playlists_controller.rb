class Api::PlaylistsController < ApplicationController
    def index
        @playlists = Playlist.all #Playlist.where(uid = currentuid)
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
        #get information supplied from the playlist params
    end
    def destroy
        #@playlist params
        #@playlist.destroy
        #render :index
        
    end

    private
    def playlist_params
        params.require(:playlist).permit(:title,:genre) #add in description,  thumbnail_url after
        #add user_id?
    end
end