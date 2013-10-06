LoanItToMe.Views.ItemPhoto = Support.CompositeView.extend({
  
  tagName: "li",
  className: "photo",
  template: JST['items/photo'],

  render: function(){
    var renderedContent = this.template({ item: this.model });
    this.$el.html(renderedContent);

    var renderedStars = LoanItToMe.Helpers.renderStars( this.model.get( 'rating' ) );

    this.$('.rating').html(renderedStars)

    return this;
  }

});