class Api::UsersController < ApplicationController

    def index
        render :index
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
