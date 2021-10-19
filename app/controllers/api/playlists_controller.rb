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
        @playlist = Playlist.find_by(id: params[:id])
        if current_user.id = @playlist.creator_id
            #owner of playlist can update stuff
            @playlist.update(title: params[:playlist][:title], 
                description: params[:playlist][:description],
                artwork: params[:playlist][:artwork]
                genre: params[:playlist][:genre])
            
            render :show
        else
            #not the owner of the playlist
            #don't let them touch the playlist
        end
        #get information supplied from the playlist params
        #@playlist.
    end
    def destroy
        @playlist = Playlist.find_by(id: params[:id])
        if current_user.id = @playlist.creator_id
            @playlist.destroy
            render :index
        else
            #render remove playlist from library
            #or should i make a button appear or not appear?
        end
    end

    private
    def playlist_params
        params.require(:playlist).permit(:title,:genre) #add in description,  thumbnail_url after
        #add user_id?
    end
end