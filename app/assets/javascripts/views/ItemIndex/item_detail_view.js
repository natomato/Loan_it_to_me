LoanItToMe.Views.ItemDetail = Support.CompositeView.extend({
  
  tagName: "li",
  className: "list",
  template: JST['items/detail'],

  events: {
    "hover .item" : "highlight"
  },

  initialize: function() {
    this.$el.attr("data-id", this.model.get("id"))
  },

  render: function() {
    var renderedContent = this.template({ item: this.model });
    this.$el.html(renderedContent);
    return this;
  },

  highlight: function() {
    
    debugger

    $(this.currentTarget).toggleClass("highlight");
  }

});