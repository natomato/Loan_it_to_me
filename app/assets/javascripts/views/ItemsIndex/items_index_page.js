  LoanItToMe.Views.ItemsIndex = Support.CompositeView.extend({
   
  className: "index",
  template: JST['items/index'],

  events: {
    "click button.list" : "renderList",
    "click button.photo" : "renderPhotos",
    "click button.map" : "renderMap",
    "click .item" : "renderDetail"
  },

  initialize: function() {
    this.currentView = new LoanItToMe.Views.ItemsList({ 
      collection: this.collection
    });
    this.$map = null;
    this.map = null;
  },

  initializeMap: function() {

    console.log('initializing the map')
    var center = new google.maps.LatLng(-25.363882, 131.044922);

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
      center: center,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      //disableDefaultUI: true,
      //draggable: true,
      // styles: styles
    };

    //must pass the constructor a DOM element, not jQuery
    this.map = new google.maps.Map(this.$map[0], mapOptions);
  },

  render: function() {
    this.renderLayout();
    this.renderViewOptions();    
    this.initializeMap();
    this.swap(this.currentView); //Every view gets a copy of the collection. Better way?

    return this;
  },

  renderDetail: function(event) {
    var id = $(event.currentTarget).data("id");
    Backbone.history.navigate("#/items/" + id, {trigger: true} );
  },

  renderLayout: function() {
    this.$el.html(this.template());
    this.$map = this.$('#map-canvas');
  },

  renderList: function() {
    var view = new LoanItToMe.Views.ItemsList({ collection: this.collection });
    this.swap(view);
  },

  renderMap: function() {
    var view = new LoanItToMe.Views.ItemsMap({ 
      collection: this.collection, 
      el: this.$map,
      map: this.map
    });
    console.log('renderMap swaps the view')
    this.swap(view);
    //To prevent missing tiles, call resize on the map after rendering into main view
    //view.render();
    google.maps.event.trigger(this.map, 'resize');
  },

  renderPhotos: function() {
    var view = new LoanItToMe.Views.ItemsPhotos({ collection: this.collection })
    
    this.swap(view);
  },

  renderViewOptions: function() {
    var viewSelect = new LoanItToMe.Views.ViewOptions({ 
      //$el does not work, the attribute is el, the $ is a jquery wrapper
      el: this.$('.view-options'),
    });
    //alternate style would be, don't override $el, let the view make its own container
    //then attach the result into the current view with
    //this.$('.view-options').append(viewSelect.render().$el)
    viewSelect.render();
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
