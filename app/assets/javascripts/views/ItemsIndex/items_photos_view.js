LoanItToMe.Views.ItemsPhotos = Support.CompositeView.extend ({

  tagName: "ul",
  className: "photos",

  render: function(){
    var _this = this;
    this.collection.each(function(item){
      var itemPhoto = new LoanItToMe.Views.ItemPhoto({ model: item });
      _this.$el.append(itemPhoto.render().$el);
    });

    return this; //renderChildInto will work without an explicit return here.
  }
})