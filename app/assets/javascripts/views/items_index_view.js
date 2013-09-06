LoanItToMe.Views.ItemsIndex = Support.CompositeView.extend({
   
  className: "index",
  template: JST['items/index'],

  events: {
    "click button.list" : "renderList",
    "click button.photo" : "renderPhotos",
    "click button.map" : "renderMap"
  },

  initialize: function(){
    this.currentView = new LoanItToMe.Views.ItemsList({ 
      collection: this.collection
    });
  },

  render: function(){
    this.renderLayout();
    this.renderViewOptions();    
    //Every view gets its own copy of the collection this way. Better way?
    this.swap(this.currentView);

    return this;
  },

  renderLayout: function(){
    this.$el.html(this.template());
  },

  renderList: function(){
    console.log("list view requested");

    var view = new LoanItToMe.Views.ItemsList({ collection: this.collection });

    //this.renderChildInto(view, this.$('.results'));
    this.swap(view);
  },

  renderMap: function(){
    console.log("get a map");
    // e.preventDefault;
    var view = new LoanItToMe.Views.ItemsMap({ collection: this.collection })
    this.swap(view);
  },

  renderPhotos: function() {
    console.log("photo view requested");
    // e.preventDefault;
    var view = new LoanItToMe.Views.ItemsPhotos({ collection: this.collection })
    this.swap(view);
  },

  renderViewOptions: function(){
    var viewSelect = new LoanItToMe.Views.ViewOptions({ 
      //$el does not work, the attribute is el, the $ is a jquery wrapper
      el: this.$('.view-options'),
    });
    //alternate style would be, don't override $el, let the view make its own container
    //then attach the result into the current view with
    //this.$('.view-options').append(viewSelect.render().$el)
    viewSelect.render();
  },

  swap: function(newView){
    this.currentView.leave();
    this.currentView = newView;
    //renderChildInto will call .empty() on the container
    //keeps the view nice and clean
    this.renderChildInto(newView, this.$('.results'));
  }
});
