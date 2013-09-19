LoanItToMe.Models.Item = Backbone.Model.extend({

  url: function() {
    return "/items/" + this.get("id") 
  },

  parse: function(params) {
    if (params.hasOwnProperty("rentals")) {
      params.rentals = new LoanItToMe.Collections.Rentals(params.rentals);
      console.log('parsing item with a rental collection')
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
;
