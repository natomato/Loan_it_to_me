LoanItToMe.Views.ItemPhoto = Backbone.View.extend({
  
  id: "li",

  template: JST['items/photo'],

  render: function(){
    var renderedContent = this.template({ item: this.model });
    this.$el.html(renderedContent);
    return this;
  }

});