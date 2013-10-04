LoanItToMe.Views.HomeMarker = Backbone.View.extend({
  
  template: JST['map_items'],

  events: {
    // 'mouseover a': 'showInfoWindow',
    // 'mouseout  a': 'hideInfoWindow',
  },

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
      content: view.render().el,
      maxHeight: 200,
    });

    var _this = this;
    //Event Listeners
    // google.maps.event.addListener(this.marker, 'click', function(){
    //   //_this.renderSidebar(view)
    //   _this.infoWindow.open(_this.map, _this.marker)
    // });
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

  renderSidebar: function(view) {
    console.log('clicked marker');

    var renderedContent = view.render().el;
    var sideBar = document.createElement('div');
    sideBar.id = 'mapSideBar'
    sideBar.appendChild(renderedContent);

    var map = document.getElementsByClassName('results');
    document.body.appendChild(sideBar);
    //var container = document.getElementsByClassName('results')
    


    // var content = document.createTextNode("hi thar");
    // test.appendChild(content);
    //document.body.insertBefore(view.render().el, container)

    // var renderedContent = this.template({ home: home });
    // home.items.each(function(item) {
    //   var itemView = new LoanItToMe.Views.ItemDetail({ model: item });
      
    // })
    // this.$el.append(renderedContent);
  }

})