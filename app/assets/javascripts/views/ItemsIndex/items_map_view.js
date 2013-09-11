LoanItToMe.Views.ItemsMap = Support.CompositeView.extend({

  // this identifies a div sibling of the parent
  // on swap, it becomes a child and from then on its added and removed as normal.  
  //id: 'map-canvas',
  //el: $map


  initialize: function(options){
    this.map = options.map;
    this.$el.removeClass('hide');
  },

  render: function(){
    var _this = this;
    var appAcademy = this.collection.get(2).attributes.home;


    var marker1 = new google.maps.Marker({
      map: this.map,
      position: new google.maps.LatLng(appAcademy.attributes.latitude, appAcademy.attributes.longitude),
      title: 'App Academy'
    });

    this.collection.each(function(item){
      console.log(item.get('name'));
    });
    
    // var marker = new google.maps.Marker({
    //   position: this.map.getCenter(),
    //   map: this.map,
    //   title: 'Click to zoom'
    // });

    // google.maps.event.addListener(this.map, 'click', function(event) {
    //   placeMarker(event.latLng);
    // });

    // function placeMarker(location) {
    //   var marker = new google.maps.Marker({
    //       position: location,
    //       map: this.map
    //   });

    //   map.setCenter(location);
    // };     
    this.map.setCenter(marker1.position);
    //google.maps.event.trigger(this.map, 'resize');
    debugger
    return this;
  }

})