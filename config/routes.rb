Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do

    post '/likes', to: 'likes#toggle'
    post '/follows', to: 'follows#toggle'
    patch '/users', to: 'users#update'
    resources :sins
    resources :comments
    resources :boards
    resources :search, only: :index
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy, :show]
  end
end
