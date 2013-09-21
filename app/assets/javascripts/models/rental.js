LoanItToMe.Models.Rental = Backbone.Model.extend({

  constructor: function(attributes) {
    attributes.start_date = new Date(attributes.start_date);
    attributes.end_date = new Date(attributes.end_date);

    Backbone.Model.apply(this, arguments);
  },

  parse: function(params) {
    params.user = new LoanItToMe.Models.User(params.user);
    return params;
  },

  toJSON: function() {
    var json = _.clone(this.attributes);
    delete json.user;
    return json;
  }

})