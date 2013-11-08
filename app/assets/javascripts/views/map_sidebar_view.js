LoanItToMe.Views.MapSideBar = Backbone.View.extend({
  
  template: JST['map_items'],

  render: function() {
    this.$el.append(template());

    return this
  }
})