LoanItToMe.Routers.Main = Support.SwappingRouter.extend({
  
  routes: {
    "": "categoriesIndex",
    "categories" : "categoriesIndex",
    "categories/:id": "itemsIndex",
    "categories/:id/:view" : "itemsIndex",
    "homes/:id": "homeShow",
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.collection;
    this.bootstrap = options.bootstrap;
  },

  categoriesIndex: function() {
    console.log("categories index - js loaded")
    //nothing to render, just adding event listeners
    var categoriesIndex = new LoanItToMe.Views.CategoryIndex({ el: this.$rootEl });
  },

  homeShow: function(id) {
    console.log('mainRouter - homeShow');
    var home = new LoanItToMe.Models.Home(this.bootstrap, {parse: true} );

    var itemRentals = new LoanItToMe.Views.ItemRentals({ collection: home.get('items') });

    itemRentals.render();
  },

  itemsIndex: function(id, view) {

    var items = new LoanItToMe.Collections.Items();
    var _this = this;
    if (view) {
      //launch the ItemsIndex at a particular view (photos, list, map)
    } else {
      items.fetch({data: {category_id: id}}).done(function() {

        console.log("fetched items") //a nested collection with homes
        
        var homes = new LoanItToMe.Collections.Homes();
        homes.fetch({data: { category_id: id }}).done(function() {
          
          console.log('fetched homes') //a nested collection with items
          
          var indexView = new LoanItToMe.Views.ItemsIndex({ 
            itemsCollection: items,
            homesCollection: homes,
            category_id: id
          });

          _this.$rootEl.html(indexView.render().$el);

        }).fail(function(model, xhr, options) {
          console.log('did not fetch homes');
        });

      }).fail(function(model, xhr, options) {
        console.log("did not fetch items")
      });
    }

  }

});