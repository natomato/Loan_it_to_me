LoanItToMe.Routers.Main = Support.SwappingRouter.extend({
  
  routes: {
    "" : "categoriesIndex",
    "categories/:id": "itemsIndex"
  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  categoriesIndex: function(){
    //nothing to render, just adding event listeners
    var categoriesIndex = new LoanItToMe.Views.CategoryIndex();
  },

  itemsIndex: function(id){

    var items = new LoanItToMe.Collections.Items();
    var _this = this;
    items.fetch({data: {category_id: id}}).done(function(){
      var indexView = new LoanItToMe.Views.ItemsIndex({ collection: items })
      _this.$rootEl.html(indexView.render().$el);
    }).fail(function(model, xhr, options){

      console.log("not for reail")

    });

  }

});