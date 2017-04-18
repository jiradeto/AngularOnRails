Rails.application.routes.draw do
  resources :photos
  root to: 'application#index'
  get '*path' => 'application#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
