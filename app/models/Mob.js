define(['backbone'],
function(Backbone) {
    var Mob = Backbone.Model.extend({
      defaults: {
        name : null,
        hp : null,
        maxHp : null,
        ofensive : null,
        defensive : null,
        xpForKill: null
      },
      
      kill: function(value) {
        this.hp -= value;
      }
      
      
    });
    
    return Mob;
    
});