Rails.application.routes.draw do
  devise_for :hitos
  root to: 'tweet#index'

  get  'tweet'       => 'tweet#index'
  get  'tweet/new'   => 'tweet#new'
  post 'tweet'       => 'tweet#create'
  get  'men/:id'     => 'men#show'
  delete 'tweet/:id' => 'tweet#destroy'
  get 'main/index' => 'main#index'
  post 'main/create' =>'main#create'
  namespace :api do
    resources :main, only: :index, defaults: { format: 'json' }
  end
end
