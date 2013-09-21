LoanItToMe.Collections.Homes = Backbone.Collection.extend({

  model: LoanItToMe.Models.Home,
  url: "/homes",  

  initialize: function(){
    console.log("initializing Homes collection");
  }

})