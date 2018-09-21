Rails.application.routes.draw do
  root 'singlepages#index'
  resources :levels, only: :show
  resources :players, only: :create
end
