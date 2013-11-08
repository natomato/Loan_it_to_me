LoanItToMe.Views.ItemDetail = Support.CompositeView.extend({
  
  tagName: "li",
  className: "item",
  template: JST['items/detail'],

  events: {
    "mouseover .item" : "highlight",
    "mouseout  .item" : "highlight"
  },

  initialize: function() {
    this.$el.attr("data-id", this.model.get("id"))
  },

  highlight: function(event) {
    $(event.currentTarget).toggleClass("highlight");
  },

  render: function() {
    var renderedContent = this.template({ item: this.model });
    this.$el.html(renderedContent);

    var renderedStars = LoanItToMe.Helpers.renderStars( this.model.get( 'rating' ) );

    this.$('.rating').html(renderedStars)
    
    return this;
  },

});