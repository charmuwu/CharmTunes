Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults:{format: :json} do
    resources :songs, only: [:show, :index]
    resources :users, only: [ :create, :update, :destroy, :index, :show]
    resource :session, only: [:new, :create, :destroy]
    resources :playlists, only: [:index, :show, :create, :update, :destroy]
    resources :playlist_songs, only:[:index, :show, :create, :destroy] 
    
  end
end
