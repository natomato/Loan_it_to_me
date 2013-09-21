LoanItToMe.Collections.Items = Backbone.Collection.extend({
  
  model: LoanItToMe.Models.Item,
  url: "/items.json",

  search: function(query) {

    //test regex
    regExp = RegExp(".*#{query.toLowerCase(){.*");

    //can i user regexp with where(this.models, {name: regexp})
    this.models.filter(function(item) {
      return item.get("name").match(regExp)
    });

  }
})


// filter = function (collection, key, regex) {
//     return _.filter(collection, function(obj){ return obj[key].match(regex);});
// };

// var publishedBooks = books.filter(function(book) {
//   return book.get("published") === true;
// });