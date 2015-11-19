Rails.application.routes.draw do
  root to: 'static_pages#root'
  resources :users, except: [:show]
  resources :users, only: [:show], defaults: {format: :json}
  resource  :session, only: [:create, :new, :destroy]
  namespace :api, defaults: {format: :json} do
    resources :sins
    resources :comments
    resources :boards
  end
end
