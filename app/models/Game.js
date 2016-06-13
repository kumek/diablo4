define(['backbone'],
function(Backbone) {
    var Game = Backbone.Model.extend({
        defaults: {
            heroName: null,
            level: 1
        },
    });
    
    return Game;
    
});