Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :photos
    post 'auth' => 'user#authenticate'
  end

  root to: 'application#index'
  get '*path' => 'application#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
