Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :users, only: [:create]
      resources :sessions, only: [:create]
    end
  end

  get "/*path", to: "root#root"
end
