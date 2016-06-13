define(['backbone'],
function(Backbone) {
    var Item = Backbone.Model.extend({
      type : "off",  // ofensive - off,  defensive - def
      name : "sword",
      
      value : 10,  // for off it`s attack power for weapon, for def it`s defensive value of armor
    });
    
    return Item;
    
});