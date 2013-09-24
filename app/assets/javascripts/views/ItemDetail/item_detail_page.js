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

  render: function(){
    var _this = this;

    $('.rating').each(function(){
      //this == each div  
      var rating = new LoanItToMe.Views.Rating({
        el: this,
        rating: $(this).data("id") 
      });
      $(this).append(rating.render());
    });
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