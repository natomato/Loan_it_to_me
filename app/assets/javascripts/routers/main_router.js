LoanItToMe.Routers.Main = Support.SwappingRouter.extend({
  
  routes: {
    "" : "categoriesIndex",
    "categories/:id": "itemsIndex"
    //"items/:id": "itemsDetail"
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  categoriesIndex: function() {
    //nothing to render, just adding event listeners
    var categoriesIndex = new LoanItToMe.Views.CategoryIndex();
  },

  itemsDetail: function(id) {
    //!! Moved everything to a server side form for simplicity
    
    //var item  = new LoanItToMe.Models.Item({ id: id });
    //var rental = new LoanItToMe.Models.Rental();
    //var review = new LoanItToMe.Models.Review();
    //var owner = new LoanItToMe.Models.User();
    // var photo = new LoanItToMe.Models.Photo();

    item.fetch().done(function(data) {
      console.log("fetched data");
      var rentals = new LoanItToMe.Collections.Rentals({ model: rental });
      //var reviews = new LoanItToMe.Collections.Reviews({ model: review });
      //var owner   = new LoanItToMe.Model.User({ data.owner })
      var detailView = new LoanItToMe.Views.ItemDetailPage({ model: item });
      _this.$rootEl.html(detailView.render().$el);
      debugger
    }).fail(function() {
      console.log("itemDetail fetch failed");
    });
  },

  itemsIndex: function(id) {

    var items = new LoanItToMe.Collections.Items();
    var _this = this;
    items.fetch({data: {category_id: id}}).done(function() {
      var indexView = new LoanItToMe.Views.ItemsIndex({ collection: items });
      _this.$rootEl.html(indexView.render().$el);
    }).fail(function(model, xhr, options) {
      console.log("not for reail")
    });
  }

});