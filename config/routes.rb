Rails.application.routes.draw do

  root 'tracks#index'

  get '/tracks', to: 'tracks#index'

end
