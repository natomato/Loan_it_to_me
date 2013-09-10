window.LoanItToMe = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var options = { $rootEl: $('.container') };
    LoanItToMe.mainRouter = new LoanItToMe.Routers.Main( options );
    Backbone.history.start();
  }
};

$(document).ready(function() {
  LoanItToMe.initialize();
});
