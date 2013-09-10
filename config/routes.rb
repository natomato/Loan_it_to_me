LoanItToMe::Application.routes.draw do

  get "item_photos/new"

  get "item_photos/create"

  get "item_photos/edit"

  get "item_photos/update"

  get "item_photos/destroy"

  get "item_photos/show"

  root to: "categories#index"
  resources :categories
  resource  :session, only: [:create, :new, :destroy]
  resources :users
  resources :homes
  resources :items do
    resources :rentals do
      resources :rental_reviews
    end
  end  
end

