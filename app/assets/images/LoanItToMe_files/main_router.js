LoanItToMe.Routers.Main = Support.SwappingRouter.extend({
  
  routes: {
    "": "categoriesIndex",
    "categories" : "categoriesIndex",
    "categories/:id": "itemsIndex",
    //homes/:id is bootstrapped with data, the view is instantiated on the webpage
    "homes/:id": "homeShow",
    //"items/:id": "itemsDetail"
  },

  //options 
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

    var _this = this;
    //the homes_show page is bootstrapped with rental request data passed into router as JSON
    // var rentals = new LoanItToMe.Collections.Rentals(this.collection);
    // var inventoryView = new LoanItToMe.Views.Inventory({ collection: this.collection });

    var home = new LoanItToMe.Models.Home();

    home.fetch().done(function() {
        
        var homeShow = new LoanItToMe.Views.HomeShow({ collection: home.get('items') });
        
        var itemPhoto = new LoanItToMe.Models.ItemPhoto()
        itemPhoto
        //_this.$rootEl.html(homeShow.render().$el);
    })

    //nothing to render, rails served up the form completely
    // this.$rootEl.html(inventoryView.render().$el);
  },

  itemsDetail: function(id) {
    //!! Moved everything to a server side form for simplicity
    
    //var item  = new LoanItToMe.Models.Item({ id: id });
    //var rental = new LoanItToMe.Models.Rental();
    //var review = new LoanItToMe.Models.Review();
    //var owner = new LoanItToMe.Models.User();
    // var photo = new LoanItToMe.Models.Photo();

    // item.fetch().done(function(data) {
    //   console.log("fetched data");
    //   var rentals = new LoanItToMe.Collections.Rentals({ model: rental });
    //   //var reviews = new LoanItToMe.Collections.Reviews({ model: review });
    //   //var owner   = new LoanItToMe.Model.User({ data.owner })
    //   var detailView = new LoanItToMe.Views.ItemDetailPage({ model: item });
    //   _this.$rootEl.html(detailView.render().$el);
    //   debugger
    // }).fail(function() {
    //   console.log("itemDetail fetch failed");
    // });
  },

  itemsIndex: function(id) {

    var items = new LoanItToMe.Collections.Items();
    var _this = this;

    //TODO: use $.when to chain these deferreds
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

});
