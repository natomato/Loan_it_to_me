LoanItToMe.Collections.Rentals = Backbone.Collection.extend({

  model: LoanItToMe.Models.Rental,
  
  //TODO: remove if not using. i override the url in the view
  url: function() {
    return 'items/' + this.item_id + '/rentals'
  }
  
})