define(['backbone'],
function(Backbone) {
    var Hero = Backbone.Model.extend({
        level: 1,
        
        xp: 0,
        xpMax: 1000,
        
        mana: 240,
        manaMax: 500,
        
        hp: 87,
        hpMax: 100
    });
    
    return Hero;
    
});