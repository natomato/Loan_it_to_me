LoanItToMe.Views.HomeShow = Support.CompositeView.extend({

  tagName: "ul",
  template: JST["home"],

  events: {
    //"click button.confirm":
  },

  render: function(){
    var _this = this;

    this.collection.each(function(item) {

      // some items do not have rental requests
      var itemRentals = new LoanItToMe.Views.ItemRentals({
        
        collection: function(){
          var rentals = item.get('rentals');
        },

        model: item

      });
      
      _this.$el.append(itemRentals.render().$el);
    });
    return this;
  }
});
