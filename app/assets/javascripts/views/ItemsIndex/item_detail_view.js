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

  render: function() {
    var renderedContent = this.template({ item: this.model });

    this.$el.html(renderedContent);
    
    //render the stars
    var rating = this.model.get("avg_rating");
    this.$('.star[data-id=' + rating + ']').prevAll().html("★").addClass('starred');
    this.$('.star[data-id=' + rating + ']').html("★").addClass('starred');

    return this;
  },

  highlight: function(event) {
    
    console.log('highlight! or notHighlight!')

    $(event.currentTarget).toggleClass("highlight");
  }

});