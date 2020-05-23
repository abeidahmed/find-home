Rails.application.routes.draw do
  namespace :admin, defaults: { format: :json } do
    namespace :api do
      
    end
  end

  get "/*path", to: "root#root"
end
