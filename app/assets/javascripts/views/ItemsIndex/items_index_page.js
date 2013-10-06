LoanItToMe.Views.ItemsIndex = Support.CompositeView.extend({

  className: "index",
  template: JST['items/index'],

  events: {
    "click button.list" : "renderList",
    "click button.photo" : "renderPhotos",
    "click button.map" : "renderMap",
    "click .item" : "renderDetail",
    "keyup .view-options": "search"
  },

  initialize: function(options) {
    this.$map        = null;
    this.map         = null;
    this.category_id = options.category_id;
    this.homes       = options.homesCollection || {}; //all homes under this category
    this.items       = options.itemsCollection || {}; //all items under this category
    this.results     = options.resultsCollection || this.items; //search results - selects from items
    this.currentView = options.view ||
      new LoanItToMe.Views.ItemsList({ 
        collection: this.options.itemsCollection
      });
  },

  //This parent owns the map to prevent reloading everytime map button clicked
  initializeMap: function() {

    console.log('initializing the map')
    var SanFran = new google.maps.LatLng(-25.363882, 131.044922);
    
    //San Francisco
    var ne = new google.maps.LatLng(37.830243,-122.292595)
    var sw = new google.maps.LatLng(37.692633,-122.495842)
    var bounds = new google.maps.LatLngBounds(sw, ne);
    
    var mapOptions = {
      center: SanFran,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
    };

    //must pass the constructor a DOM element, not jQuery
    this.map = new google.maps.Map(this.$map[0], mapOptions);
    this.map.fitBounds(bounds);
  },

  render: function() {
    this.renderLayout();
    this.renderViewOptions();    
    this.initializeMap();
    this.swap(this.currentView); //Every view gets a copy of the collection

    return this;
  },

  renderDetail: function() {
    //Now this is handled by Rails
    //var id = $(event.currentTarget).data("id");
    //Backbone.history.navigate("/items/" + id, {trigger: true} ); 
  },

  renderLayout: function() {
    this.$el.html(this.template());
    this.$map = this.$('#map-canvas');
  },

  renderList: function() {

    var view = new LoanItToMe.Views.ItemsList({ collection: this.results });
    // LoanItToMe.mainRouter.navigate("categories/" + this.category_id + "/list/");
    this.swap(view);

  },

  renderMap: function() {
   
    // Backbone's deferred pattern - fails to load homes into collection
    // var home  = new LoanItToMe.Models.Home();
    // var homes = new LoanItToMe.Collections.Homes();
    //
    // var view = new LoanItToMe.Views.ItemsMap({
    //   collection: homes,
    //   el: _this.$map,
    //   map: _this.map
    // });
    //
    // view.render();
    // this.swap(view);
    ///////////////////

    var view = new LoanItToMe.Views.HomesMap({ 
      collection: this.homes,
      el: this.$map,
      map: this.map
    });

    // var sideBar = new LoanItToMe.Views.SideBar();
    
    // LoanItToMe.mainRouter.navigate("categories/" + this.category_id + "/map/");
    this.swap(view);

    //To prevent missing tiles, call resize on the map after rendering into main view
    google.maps.event.trigger(this.map, 'resize');
  },

  renderPhotos: function() {
    var view = new LoanItToMe.Views.ItemsPhotos({ collection: this.results })
    
    // LoanItToMe.mainRouter.navigate("categories/" + this.category_id + "/photos/");
    this.swap(view);
    // return new LoanItToMe.Views.ItemsPhotos({ collection: this.items })
  },

  renderViewOptions: function() {

    var viewSelect = new LoanItToMe.Views.ViewOptions({ 
      el: this.$('.view-options')
    });

    viewSelect.render();
  },

  search: _.debounce(function() {
    var results = this.items.search( $("#query").val() );
    this.results = new LoanItToMe.Collections.Items(results);
    this.currentView.collection = this.results
    this.currentView.$el.empty();
    this.swap(this.currentView);
  }, 100),

  swap: function(newView) {
    console.log('swapped');
    this.currentView.leave();
    this.currentView = newView;

    if( newView.map ){
      this.$map.show();
      this.$('#query').hide();
    } else {
      this.$map.hide();
      this.$('#query').show();
    }

    this.renderChildInto(newView, this.$('.results'));
  }

});
