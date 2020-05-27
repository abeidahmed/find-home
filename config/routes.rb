Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :users, only: [:index, :create, :destroy]
      resources :sessions, only: [:create]
      resources :categories, only: [:index, :create, :show, :update, :destroy]
      resources :posts, only: [:index, :create, :show, :update, :destroy]

      get "/logged_in", to: "sessions#logged_in"
    end
  end

  root to: "root#root"
  get "/*path", to: "root#root"
end
