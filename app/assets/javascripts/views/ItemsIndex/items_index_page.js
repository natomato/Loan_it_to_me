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
    this.currentView = new LoanItToMe.Views.ItemsList({ 
      collection: this.options.itemsCollection
    });
    this.$map = null;
    this.map = null;
    this.category_id = options.category_id;
    this.homesCollection = options.homesCollection;
    this.itemsCollection = options.itemsCollection;

  },

  //TODO: refactor? This view owns maps to reduce load everytime button clicked
  initializeMap: function() {

    console.log('initializing the map')
    var SanFran = new google.maps.LatLng(-25.363882, 131.044922);
    
    //San Francisco
    var ne = new google.maps.LatLng(37.830243,-122.292595)
    var sw = new google.maps.LatLng(37.692633,-122.495842)
    var bounds = new google.maps.LatLngBounds(sw, ne);
    // var styles = [
    //   {
    //     elementType: "geometry",
    //     stylers: [
    //       { lightness: 33 },
    //       { saturation: -90 }
    //     ]
    //   }
    // ];
    
    var mapOptions = {
      center: SanFran,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      //disableDefaultUI: true,
      //draggable: true,
      // styles: styles
    };

    //must pass the constructor a DOM element, not jQuery
    this.map = new google.maps.Map(this.$map[0], mapOptions);
    this.map.fitBounds(bounds);

  },

  render: function() {
    this.renderLayout();
    this.renderViewOptions();    
    this.initializeMap();
    this.swap(this.currentView); //Every view gets a copy of the collection. Better way?

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

  renderList: function(event) {
    // event.preventDefault();
    var view = new LoanItToMe.Views.ItemsList({ collection: this.itemsCollection });
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
      collection: this.homesCollection,
      el: this.$map,
      map: this.map
    });

    this.swap(view);

    //To prevent missing tiles, call resize on the map after rendering into main view
    google.maps.event.trigger(this.map, 'resize');
  },

  renderPhotos: function() {
    var view = new LoanItToMe.Views.ItemsPhotos({ collection: this.itemsCollection })
    
    this.swap(view);
  },

  renderViewOptions: function() {

    var viewSelect = new LoanItToMe.Views.ViewOptions({ 
      el: this.$('.view-options') //$el does not work, the attribute is el, the $ is a jquery wrapper
    });
    //alternate style would be, don't override $el, let the view make its own container
    //then attach the result into the current view with
    //this.$('.view-options').append(viewSelect.render().$el)
    viewSelect.render();
  },

  search: function() {
    console.log('key up');
  },

  swap: function(newView) {
    this.currentView.leave();
    this.currentView = newView;

    if( newView.id === 'map-canvas' ){
      this.$map.show(); 
    } else {
      this.$map.hide();
    }

    //renderChildInto will call .empty() on the container
    this.renderChildInto(newView, this.$('.results'));
  }

});
