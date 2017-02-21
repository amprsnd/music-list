Rails.application.routes.draw do

  root 'ui#index'

  get '/tracks', to: 'tracks#index'

end
