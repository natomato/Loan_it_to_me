LoanItToMe.Views.Rental = Support.CompositeView.extend({

  tagName: "li",

  render: function() {
    renderedContent = template({ rental: this.model });
    
    return this;
  }

})