LoanItToMe.Views.ItemRentals = Support.CompositeView.extend({

  tagName: 'li',

  template: JST['rentals'],

  events: function() {

  },

  render: function() {
    var _this = this;

    this.collection.each(function(rental) {

      if (typeof rentals === 'undefined'){ return };

      var rentalDetail = new LoanItToMe.Views.Rental({ 
        el: $('.rental'),
        model: rental
      });

      _this.$el.append(rentalDetail.render().$el);
    
    });

    var renderedContent = template({ item: this.model, rentals: this.collection });
    return this;
  }

})
;
