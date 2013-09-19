LoanItToMe.Models.Item = Backbone.Model.extend({

  url: function() {
    return "/items/" + this.get("id") 
  },

  parse: function(params) {

    if (params.hasOwnProperty("pending_requests")) {
      console.log('parsing item with a rental collection')
      params.pending_requests = new LoanItToMe.Collections.Rentals(params.pending_requests, {parse: true});
    }

    if (params.hasOwnProperty("home")) {
      params.home = new LoanItToMe.Models.Home(params.home);
      console.log('parsing item with a home model')
    }

    return params
  },

  //TODO: verify this works as expected
  toJSON: function() {
    var json = _.clone(this.attributes);
    delete json.home;
    //delete json.rental;
    return json;
  }
})