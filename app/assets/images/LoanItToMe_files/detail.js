(function() {
  this.JST || (this.JST = {});
  this.JST["items/detail"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="item-list">\n  <hr>\n  <div class="price">',  JST['items/_item_price']({item: item}) ,'</div>\n  <img src="',  item.escape( 'photo_small') ,'" alt="">\n  <a href="/items/',  item.id ,'" class="name">',  item.escape( 'name' ) ,'</a>\n  <div class="description">',  item.escape( 'description' ) ,'</div>\n  <div class="rating">\n    <span class="star" data-id="1">☆</span>\n    <span class="star" data-id="2">☆</span>\n    <span class="star" data-id="3">☆</span>\n    <span class="star" data-id="4">☆</span>\n    <span class="star" data-id="5">☆</span>\n  </div>\n</div>\n');}return __p.join('');};
}).call(this);
