LoanItToMe.Views.Rental = Support.CompositeView.extend({

  template: JST['rental'],

  events: {
    "click button.accept": "saveRental"
  },

  saveRental: function(event) {
    event.preventDefault;
    var id = $(event.currentTarget).data('id');
    var _this = this;

    this.model.url = "/items/" + this.model.get('item_id') + "/rentals/" + this.model.id

    this.model.save({status: 'approved'}, {
      success: function( responseData ){
        console.log('success: ' + responseData);
        console.log(_this.model.get('status'));
      },
      errors: function(){
        console.log('rental did not save');
      }
    });

    
  },

  render: function() {
    dateFormat.masks.rentalTime = "dddd mmm dd";

    var renderedContent = this.template({ 
      rental: this.model,
      user: this.model.get('user')
    });
    
    this.$el.html(renderedContent);

    return this;
  }

})
;
