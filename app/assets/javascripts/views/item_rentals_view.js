LoanItToMe.Views.ItemRentals = Support.CompositeView.extend({

  tagName: 'li',

  render: function() {
    var _this = this;
    this.collection.each(function(item) {
      var rentals = item.get('pending_requests');
      if (rentals.length === 0){ return };
      
      //add item_id attr to use in the url function: /items/:id/rentals/
      rentals.item_id = item.id;      

      var rentalsIndex = new LoanItToMe.Views.Rentals({ 
        el: $( '.request#' + item.get('id') ),
        collection: rentals,
      });

      //this subview renders itself directly onto the DOM
      rentalsIndex.render();
    });

    //note: subview rendered itself directly onto page
    return this;
  }

})