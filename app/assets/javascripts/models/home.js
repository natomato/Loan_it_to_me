LoanItToMe.Models.Home = Backbone.Model.extend({

  url: function() {
    return "/homes/" + this.get("id") 
  },

  parse: function(params) {
    params.items = new LoanItToMe.Collections.Items(params.items, {parse: true});
    return params;
  }


})