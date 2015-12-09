Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do

    post '/likes', to: 'likes#toggle'
    post '/follows', to: 'follows#toggle'
    resources :sins
    resources :comments
    resources :boards
    resources :search, only: :index
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy, :show]
    patch '/users', to: 'users#update'
  end
end
