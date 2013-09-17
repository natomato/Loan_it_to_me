LoanItToMe.Models.Item = Backbone.Model.extend({

  url: function() {
    return "/items/" + this.get("id") 
  },

  parse: function(params) {

    if (params.hasOwnProperty("rentals")) {
      params.rentals = new LoanItToMe.Collections.Rentals(params.rentals);
    }

    if (params.hasOwnProperty("home")) {
      params.home = new LoanItToMe.Models.Home(params.home);
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