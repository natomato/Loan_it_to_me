LoanItToMe.Models.Item = Backbone.Model.extend({

  parse: function(params){
    params.home = new LoanItToMe.Models.Home(params.home);

    return params;
  },

  toJSON: function() {
    var json = _.clone(this.attributes);
    delete json.home;
    return json;
  }
})