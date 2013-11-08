LoanItToMe.Collections.Rentals = Backbone.Collection.extend({

  model: LoanItToMe.Models.Rental,
  
  url: function() {
    return 'items/' + this.item_id + '/rentals'
  }
  
})