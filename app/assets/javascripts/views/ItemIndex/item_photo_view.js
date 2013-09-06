LoanItToMe.Views.ItemPhoto = Support.CompositeView.extend({
  
  tagName: "li",
  className: "photo",
  template: JST['items/photo'],

  render: function(){
    var renderedContent = this.template({ item: this.model });
    this.$el.html(renderedContent);
    return this;
  }

});