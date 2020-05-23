Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :users, only: [:index, :create]
      resources :sessions, only: [:create]
    end
  end

  root to: "root#root"
  get "/*path", to: "root#root"
end
