LoanItToMe.Routers.Main = Support.SwappingRouter.extend({
  
  routes: {
    "" : "categoriesIndex",
    "categories/:id": "itemsIndex",
    "homes/:id": "inventory",
    //"items/:id": "itemsDetail"
  },

  //not a true options hash extend, works b/c options is never null
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.collection;
  },

  categoriesIndex: function() {
    //nothing to render, just adding event listeners
    var categoriesIndex = new LoanItToMe.Views.CategoryIndex();
  },

  inventory: function(id) {
    console.log('mainRouter - inventory')
    //the homes_show page is bootstrapped with rental request data passed into router as JSON
    var rentals = new LoanItToMe.Collections.Rentals(this.collection);
    var inventoryView = new LoanItToMe.Views.Inventory({ collection: this.collection });

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
    items.fetch({data: {category_id: id}}).done(function() {
      console.log("fetched data from server")
      var indexView = new LoanItToMe.Views.ItemsIndex({ collection: items });
      _this.$rootEl.html(indexView.render().$el);
    }).fail(function(model, xhr, options) {
      console.log("not for real")
    });
  }

});