LoanItToMe.Models.Home = Backbone.Model.extend({

  parse: function(params) {
    console.log('parsing home with an items collection')
    params.items = new LoanItToMe.Collections.Items(params.items);
    return params;
  }


})