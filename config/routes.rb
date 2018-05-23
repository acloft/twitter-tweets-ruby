Rails.application.routes.draw do
 
    match '/' => 'twitter#index', :via => :get
    match '/results' => 'twitter#results', :via => :get
    root 'twitter#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
