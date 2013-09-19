(function() {
  this.JST || (this.JST = {});
  this.JST["items/_item_price"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="price">\n  ');  if( +item.get('price') > 0 ) { ; __p.push('\n    ',  item.escape( 'price' ) ,'\n  ');  } else { ; __p.push('\n    ',  'Free' ,'\n  ');  }; ; __p.push('\n</div>\n');}return __p.join('');};
}).call(this);
