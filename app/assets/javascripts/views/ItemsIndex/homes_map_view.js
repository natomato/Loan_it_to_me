LoanItToMe.Views.HomesMap = Support.CompositeView.extend({

  // this identifies a div sibling of the parent
  // on swap, it becomes a child and from then on its added and removed as normal.  
  // id: 'map-canvas',
  // el: $map
  // collection: homes, each home has an items collection as a property

  initialize: function(options){
    this.map = options.map;
    this.$el.removeClass('hide');
    
    //listenTo change on collection from search query and re-render

  },

  events: {
    'mouseover a': 'showInfoWindow',
    'mouseout  a': 'hideInfoWindow'
  },

  render: function(){
    var _this = this;

    

    // Backbone deferred pattern, the method will execute, but the collection is still empty
    // this.collection.deferred.done( function(){
    //   console.log('maps data returned from server');
    // });

    this.collection.each(function(home){
      var homeMarker = new LoanItToMe.Views.HomeMarker({
        map: _this.map,
        model: home,
        collection: home.get('items')
      })
    });
    

    // google.maps.event.addListener(this.map, 'click', function(event) {
    //   placeMarker(event.latLng);
    // });

    // function placeMarker(location) {
    //   var marker = new google.maps.Marker({
    //       position: location,
    //       map: this.map
    //   });

    //return this; //this is the map-canvas div
  }

})