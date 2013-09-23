LoanItToMe.Views.HomeMarker = Backbone.View.extend({
  
  events: {
    // 'mouseover a': 'showInfoWindow',
    // 'mouseout  a': 'hideInfoWindow',
  },
  template: JST['map_items'],

  initialize: function(options){
    this.map = options.map;
    this.collection = options.collection;
    // this.sidebar = options.sidebar
    
    console.log(this.model.get('longitude'));

    this.marker = new google.maps.Marker({
      map: this.map,
      position: new google.maps.LatLng(this.model.get('latitude'), this.model.get('longitude')),
      //animation: google.maps.Animation.DROP,
    });

    var view = new LoanItToMe.Views.ItemsList({ collection: this.collection });

    this.infoWindow = new google.maps.InfoWindow({
      content: view.render().el
    });

    //Event Listeners
    google.maps.event.addListener(this.marker, 'click', this.renderSidebar);
  },

  render: function(){
    console.log('homeMarker render - wut?')
  },

  showInfoWindow: function() {
    // //this.marker undefined, this.model undefined
    // this.infoWindow.open(this.map, this.marker);
    // this.infoWindow.setPosition(this.model.get('latitude'), this.model.get('longitude'));
  },

  hideInfoWindow: function() {
    // this.infoWindow.close();
  },

  renderSidebar: function(home) {
    console.log('clicked marker');
    
    // var renderedContent = this.template({ home: home });
    // home.items.each(function(item) {
    //   var itemView = new LoanItToMe.Views.ItemDetail({ model: item });
      
    // })
    // this.$el.append(renderedContent);
  }

})