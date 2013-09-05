LoanItToMe.Views.ItemsIndex = Support.CompositeView.extend({
  
  // currentView: new LoanItToMe.Views[this.lastRender]({ 
  //   collection: this.collection
  // });
  
  className: "index",
  //lastRender: "renderList",
  template: JST['items/index'],

  events: {
    "click .list" : "renderList",
    "click .photo" : "renderPhotos",
    "click .map" : "renderMap"
  },

  initialize: function(){
    this.currentView = new LoanItToMe.Views.ItemsList({ 
      collection: this.collection
    });
  },

  render: function(){
    this.renderLayout();
    this.renderViewOptions();    
    //? Every view gets its own copy of the collection
    // var view = new LoanItToMe.Views[this.currentView]({ 
    //   collection: this.collection
    // });
    //this.renderChildInto(view, this.$('.results'));
    //this[this.currentView]();
    //this.$('.results').append(this.currentView.render());
    this.swap(this.currentView);
    debugger

    return this;
  },

  renderLayout: function(){
    this.$el.html(this.template());
  },

  renderList: function(){

    var view = new LoanItToMe.Views.ItemsList({ collection: this.collection});

    //this.renderChildInto(view, this.$('.results'));
    this.swap(view);
  },

  renderMap: function(){
    console.log("get a map");
  },

  renderPhotos: function() {
    // e.preventDefault;
    //photo view is .hidden by default
    $results = this.$('.results');
    this.collection.each(function(item){
      var itemPhoto = new LoanItToMe.Views.ItemPhoto({ model: item });
      $results.append(itemPhoto.render().$el);
    });
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
