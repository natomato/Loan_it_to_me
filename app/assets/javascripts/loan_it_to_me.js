window.LoanItToMe = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Helpers: {},

  initialize: function(options) {
    LoanItToMe.mainRouter = new LoanItToMe.Routers.Main( options );
    Backbone.history.start({ pushState: true, hashChange: false });
  }
};