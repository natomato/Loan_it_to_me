LoanItToMe.Views.ItemDetailPage = Support.CompositeView.extend({

  events: {
  },

  initialize: function(){
    console.log("im alive!")
    this.displayRating();
  },

  addFile: function(){

    console.log("you want to add a file");

  },

  displayRating: function(opts){
    var opts = opts || {};
    if (opts.fixed === true) {
      //dont listen to onhover
    } else {
      //listen to on hover
    };
    $('.star').data("score");
    
  }

})