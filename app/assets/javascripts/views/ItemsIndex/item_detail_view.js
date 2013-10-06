LoanItToMe.Views.ItemDetail = Support.CompositeView.extend({
  
  tagName: "li",
  className: "item",
  template: JST['items/detail'],

  events: {
    "mouseover .item" : "highlight",
    "mouseout  .item" : "highlight"
  },

  //TODO move rating to a sub template
  initialize: function() {
    this.$el.attr("data-id", this.model.get("id"))
  },

  highlight: function(event) {
    
    console.log('highlight! or notHighlight!')

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