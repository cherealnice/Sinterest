Rails.application.routes.draw do
  root to: 'static_pages#root'
  resources :users, except: [:show]
  resources :users, only: [:show], defaults: {format: :json}
  resource  :session, only: [:create, :new, :destroy]
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :sins
    resources :comments
    resources :boards
    post '/likes', to: 'likes#toggle'
    post '/follows', to: 'follows#toggle'
  end
end
