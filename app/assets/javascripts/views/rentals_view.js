LoanItToMe.Views.Rentals = Support.CompositeView.extend({

  //pass in the el matching the correct item
  //pass in the collection of rental requests
  initialize: function() {

    this.listenTo(this.collection, 'sync', this.updateRentalRequests);
  },

  updateRentalRequests: function(event) {
    console.log('i heard that');
    // var item = this.collection.get(id);
    // item.get('')
    //then call collection reset
    var _this = this;
    //TODO: maybe remove, view instantiated with URL attr
    // this.collection.url = "/items/" + this.collection.item_id + "/rentals"

    //be silent! a change event will loop forever
    $.ajax({
      url: "/items/" + this.collection.item_id + "/rentals",
      type: 'GET',
      dataType: 'json',
      success: function(responseData){
        debugger
        var pending = _.where(responseData, {status: "pending"})
        var rentals = new LoanItToMe.Collections.Rentals( pending, {parse: true} );
        _this.collection.reset( {silent: true} );
        _this.collection = rentals;
        _this.render();
      }
    });

    //fetches localhost:3000/homes/items/1/rentals ... the router thinks homes is the base
    //this.collection.sync('update', model, {

    // this.collection.sync({
    //   //reset: true,
    //   silent: true,
    //   success: function(collection, options, response){
    //     console.log(response.responseText)
    //     //filter collection to future requests
    //     _this.collection = new LoanItToMe.Collections.Rentals( collection.where({status: "pending"}) );
    //     _this.render();
    //   },
    //   error: function(collection, options, response){
    //     console.log('collection fetch failed' + response);
    //   }
    // });
    
  },

  render: function() {
    var _this = this;
    _this.$el.empty();

    this.collection.each(function(rental){
    
      console.log('rental ' + rental.id)
    
      var rentalDetail = new LoanItToMe.Views.Rental({ model: rental });

      _this.$el.append(rentalDetail.render().el);
    });

    return this;
  }

})