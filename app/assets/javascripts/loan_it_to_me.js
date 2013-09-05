window.LoanItToMe = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var options = { $rootEl: $('.container') };
    var mainRouter = new LoanItToMe.Routers.Main( options );
    Backbone.history.start();
  }
};

$(document).ready(function() {
  LoanItToMe.initialize();
});
