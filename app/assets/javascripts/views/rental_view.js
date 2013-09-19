LoanItToMe.Views.Rental = Support.CompositeView.extend({

  template: JST['rental'],
  tagName: "li",

  render: function() {
    dateFormat.masks.rentalTime = "dddd mmm dd";
    renderedContent = this.template({ rental: this.model });
    
    this.$el.append(renderedContent);

    return this;
  }

})
;
