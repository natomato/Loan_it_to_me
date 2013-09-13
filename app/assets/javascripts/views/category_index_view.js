LoanItToMe.Views.CategoryIndex = Backbone.View.extend({

  //el: ".container",

  events: {
    "mouseover .category-item": "highlight",
    "mouseout  .category-item": "unhighlight"
  },

  highlight: function(event) {
    $(event.currentTarget).addClass('highlight');
  },

  unhighlight: function(event) {
    $(event.currentTarget).removeClass('highlight');
  },

  render: function(){
    //TODO delete
  }


});