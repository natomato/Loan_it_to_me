LoanItToMe.Views.HomesMap = Support.CompositeView.extend({

  // this identifies a div sibling of the parent
  // on swap, it becomes a child and from then on its added and removed as normal.  
  // id: 'map-canvas',
  // el: $map
  // collection: homes, each home has an items collection as a property

  initialize: function(options){
    this.map = options.map;
    this.$el.removeClass('hide');
    this.$el.append(JST['map_items']()); //this enables me to create a floating div overmap of items at a marker

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
        collection: home.get('items'),
        el: _this.$('.map-sidebar')
      })
    });
  }

})