window.LoanItToMe = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(options) {
    //var options = { $rootEl: $('.main-content') };
    LoanItToMe.mainRouter = new LoanItToMe.Routers.Main( options );
    Backbone.history.start({ pushState: true, hashChange: false });
  }
};

//moved the initial on-ready function into every view that kicks off the app
//because the app has more than one entry point
// $(document).ready(function() {
//   var options = { $rootEl: $('.main-content') };
//   LoanItToMe.initialize(options);
// });