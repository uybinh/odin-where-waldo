Rails.application.routes.draw do
  root 'singlepages#index'
  resources :levels, only: :show
end
