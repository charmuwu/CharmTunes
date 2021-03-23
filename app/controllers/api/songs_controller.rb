class Api::SongsController < ApplicationController
    def index
        @songs = Song.all
        render :index
    end
    def show
        @song = Song.find_by(params[:id])
        render :show
    end
end