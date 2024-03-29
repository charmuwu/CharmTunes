class Api::UsersController < ApplicationController

    def index
        @users = User.all
        render :index
    end
    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def create 
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            # flash.now[:errors] = @user.errors.full_messages
            render json: @user.errors.full_messages, status: "422"
        end
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
