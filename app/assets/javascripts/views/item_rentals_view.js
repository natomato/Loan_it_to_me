LoanItToMe.Views.ItemRentals = Support.CompositeView.extend({

  tagName: 'li',

  // template: JST['rentals'],

  events: function() {
    //listen for click
  },

  saveItem: function() {
    //collection reset
  },

  render: function() {
    var _this = this;
    console.log('rendering the item rental requests');
    this.collection.each(function(item) {

      var rentals = item.get('pending_requests');
      if (rentals.length === 0){ return };

      rentals.each(function(rental) {

        var rentalDetail = new LoanItToMe.Views.Rental({ 
          el: $( '.request#' + item.get('id') ),
          model: rental
        });

        rentalDetail.render();

      });

      //item's photo already rendered by server, append to ul.requests
      // _this.$el.append(renderedContent);
    });

    //var renderedContent = template({ item: this.model, rentals: this.collection });
    //nothing to return, rendered directly onto the main page
    return this;
  }

})