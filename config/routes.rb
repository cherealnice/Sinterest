Rails.application.routes.draw do
  root to: 'static_pages#root'
  resources :users, except: [:show]
  resources :users, only: [:show], defaults: {format: :json}
  resource  :session, only: [:create, :new, :destroy]

  namespace :api, defaults: {format: :json} do

    post '/likes', to: 'likes#toggle'
    post '/follows', to: 'follows#toggle'
    resources :sins
    resources :comments
    resources :boards
    resources :search, only: :index
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy, :show]
  end
end
