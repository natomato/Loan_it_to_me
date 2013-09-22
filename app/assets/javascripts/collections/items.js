LoanItToMe.Collections.Items = Backbone.Collection.extend({
  
  model: LoanItToMe.Models.Item,
  url: "/items.json",

  search: function(query) {

    var regExp = RegExp(".*" + query.toLowerCase() + ".*");
    
    var results = this.models.filter(function(item) {
      return item.get("name").match(regExp)
    });
 
    return results;
  }

})
