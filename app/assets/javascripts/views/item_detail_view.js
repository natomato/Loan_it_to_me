LoanItToMe.Views.ItemDetail = Support.CompositeView.extend({
  
  id: "li",

  template: JST['items/detail'],

  render: function(){
    var renderedContent = this.template({ item: this.model });
    this.$el.html(renderedContent);
    return this;
  }

});