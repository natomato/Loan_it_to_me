LoanItToMe.Models.Item = Backbone.Model.extend({

  url: function() {
    return "/items/" + this.get("id") 
  },

  parse: function(params) {

    if (params.hasOwnProperty("pending_requests")) {
      params.pending_requests = new LoanItToMe.Collections.Rentals(params.pending_requests, {parse: true});
    }

    if (params.hasOwnProperty("home")) {
      params.home = new LoanItToMe.Models.Home(params.home);
    }

    params.rating = Math.round( params.rating );
    
    return params
  },

  toJSON: function() {
    var json = _.clone(this.attributes);
    delete json.home;
    delete json.rating;
    return json;
  }
})