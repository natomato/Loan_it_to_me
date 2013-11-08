LoanItToMe.Views.CategoryIndex = Backbone.View.extend({

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


});