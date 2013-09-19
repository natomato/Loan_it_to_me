LoanItToMe.Collections.Homes = Backbone.Collection.extend({

  model: LoanItToMe.Models.Home,
  url: "/homes",  

  //models parse method is never executed after initializing
  initialize: function(){
    console.log("initializing Homes collection");
    // this.deferred = this.fetch( {data: { category_id: this.category_id }} );
  }

})
;
