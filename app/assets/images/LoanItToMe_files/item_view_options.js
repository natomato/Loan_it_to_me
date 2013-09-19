LoanItToMe.Views.ViewOptions = Support.CompositeView.extend({

  template: JST['items/view_options'],

  render: function(){
    var renderedContent = this.template();

    this.$el.html(renderedContent);
    return this;
  },

});
