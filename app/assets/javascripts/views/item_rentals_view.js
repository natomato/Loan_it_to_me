LoanItToMe.Views.ItemRentals = Support.CompositeView.extend({

  tagName: 'li',

  // template: JST['rentals'],
  initialize: function() {
    // this.listenTo(this.collection, 'sync');
    //this.collection == items
  },

  events: {
    //listen for model change, then rerender/refetch the all items and rentals
  },

  render: function() {

    var _this = this;
    console.log('rendering the item rental requests');

    this.collection.each(function(item) {

      var rentals = item.get('pending_requests');
      
      if (rentals.length === 0){ return }; //this works :)
      
      //add item_id attr to use in the url function: /items/:id/rentals/
      rentals.item_id = item.id;      
      console.log('item rentals for item' + item.id)

      var rentalsIndex = new LoanItToMe.Views.Rentals({ 
        el: $( '.request#' + item.get('id') ), //only grabs the matching items <ul></ul>
        collection: rentals,
      });

      //this subview renders itself directly onto the DOM
      rentalsIndex.render();
    });

    //nothing to return, subview rendered itself directly onto page
    //TODO: test deleting the return 
    return this;
  }

})