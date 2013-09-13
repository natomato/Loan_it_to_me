LoanItToMe.Views.ItemsList = Support.CompositeView.extend({

  tagName: "ul",
  className: "list",

  render: function(){
    var _this = this;
    this.collection.each(function(item){
      var itemDetail = new LoanItToMe.Views.ItemDetail({ model: item });
      _this.$el.append(itemDetail.render().$el);
    });

    return this;
  }
})