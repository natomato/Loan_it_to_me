LoanItToMe.Models.Item = Backbone.Model.extend({

  url: function() {
    return "/items/" + this.get("id") 
  },

  parse: function(params) {
    if (params.home === undefined){
      return params;
      console.log(params);
    } else {
      params.home = new LoanItToMe.Models.Home(params.home);
      console.log(params);
      return params;
    }
  },

  toJSON: function() {
    var json = _.clone(this.attributes);
    delete json.home;
    return json;
  }
})