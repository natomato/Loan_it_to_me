LoanItToMe::Application.routes.draw do
  root to: "categories#index"
  resources :categories
  resource  :session, only: [:create, :new, :destroy]
  resources :users
  resources :homes
  resources :items do
    resources :rentals, except: [:edit, :destroy] do
      resources :rental_reviews
    end
  end
  resources :rentals, only: [:edit]  
end

