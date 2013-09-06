LoanItToMe.Views.ItemDetailPage = Support.CompositeView.extend({

  events: {
    "click button.test" : "test"
  },

  initialize: function(){
    console.log("im alive!")
  },

  test: function(){
    console.log("you clickede me");

  }

})