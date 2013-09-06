LoanItToMe.Views.ItemPhoto = Support.CompositeView.extend({
  
  tagName: "li",
  className: "photos",
  template: JST['items/photo'],

  render: function(){
    var renderedContent = this.template({ item: this.model });
    this.$el.html(renderedContent);
    return this;
  }

});