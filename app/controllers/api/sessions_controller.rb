class Api::SessionsController < ApplicationController
    def new
        render :new
    end

    def create 
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render :show
        else
            flash.now[:errors] = ["Incorrect username or password."]
        end
    end

    def destroy
        logout!
        render :destroy
    end

end
