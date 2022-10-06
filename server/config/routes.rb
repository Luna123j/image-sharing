Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/users',          to: 'users#index'
  get '/users/:user_id', to: 'users#show'
  post '/users',         to: 'users#create'

  
  get '/logged_in', to: 'sessions#is_logged_in?'
  post '/login',    to: 'sessions#create'
  post '/logout',   to: 'sessions#destroy'


  # Defines the root path route ("/")
  # root "articles#index"
  resources :cats, only: [:index]
  resources :users, only: [:create, :show, :index] do 
    resources :items, only: [:create, :show, :index, :destroy]
  end
end
