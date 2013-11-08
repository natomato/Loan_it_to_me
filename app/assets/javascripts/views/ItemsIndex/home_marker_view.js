LoanItToMe.Views.HomeMarker = Backbone.View.extend({
  
  template: JST['map_items'],

  initialize: function(options){
    this.map = options.map;
    this.collection = options.collection;
    this.el = options.el;
    
    console.log(this.model.get('longitude'));

    this.marker = new google.maps.Marker({
      map: this.map,
      position: new google.maps.LatLng(this.model.get('latitude'), this.model.get('longitude')),
    });

    var _this = this;
    //Event Listeners
    google.maps.event.addListener(this.marker, 'click', function(){
      _this.renderSidebar()
    });
  },

  render: function(){
    console.log('homeMarker render - wut?')
  },

  renderSidebar: function(view) {
    console.log('clicked marker');
    var view = new LoanItToMe.Views.ItemsList({ collection: this.collection });
    var renderedContent = view.render().el;
    this.$el.empty()

    this.$el.html(renderedContent);
  }

})