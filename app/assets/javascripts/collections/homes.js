// Used to drop pins on the map
LoanItToMe.Collections.Homes = Backbone.Collection.extend({
  model: LoanItToMe.Models.Home,
  url: "/homes"
})