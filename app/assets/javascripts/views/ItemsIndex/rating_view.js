LoanItToMe.Views.Rating = Backbone.View.extend({

  template: JST['rating'],

  initialize: function(options) {
    this.rating = this.options.rating
  },

  render: function() {
    this.$el.html(this.template());
    $('.star[data-id=' + this.rating + ']').prevAll().html("★").addClass('starred');
    $('.star[data-id=' + this.rating + ']').html("★").addClass('starred');
  }
})