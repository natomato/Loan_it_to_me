LoanItToMe.Helpers = {

  renderStars: function(rating){
    var renderedStars = ""

    //i is 1..5 so that indices align with ratings
    for (var i = 1; i < 6; i++) {
      
      if ( rating >= i ) {
        renderedStars += "<span class='star starred'>★</span>"
      } else {
        renderedStars += "<span class='star'>☆</span>"
      }

    }
    return renderedStars
  },

}
