LoanItToMe.Views.Rentals = Support.CompositeView.extend({

  //pass in the el matching the correct item
  //pass in the collection of rental requests
  initialize: function() {

    this.listenTo(this.collection, 'sync', this.updateRentalRequests);
  },

  updateRentalRequests: function(event) {
    var _this = this;

    //be silent! a change event will loop forever
    $.ajax({
      url: "/items/" + this.collection.item_id + "/rentals",
      type: 'GET',
      dataType: 'json',
      success: function(responseData){
        
        var pending = _.where(responseData, {status: "pending"})
        var rentals = new LoanItToMe.Collections.Rentals( pending, {parse: true} );
        _this.collection.reset( {silent: true} );
        _this.collection = rentals;
        _this.render();
      }
    });
  },

  render: function() {
    var _this = this;
    _this.$el.empty();

    this.collection.each(function(rental){
      var rentalDetail = new LoanItToMe.Views.Rental({ model: rental });
      _this.$el.append(rentalDetail.render().el);
    });

    return this;
  }

})