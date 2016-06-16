define([
    'react', 
    'components/TopBar', 
    'components/EquipmentWindow',
    'components/StatsWindow',
    'components/FloorWindow'
    ], function(React, TopBar, EquipmentWindow, StatsWindow, FloorWindow) {
        
        // An example generic Mixin that you can add to any component that should react
        // to changes in a Backbone component. The use cases we've identified thus far
        // are for Collections -- since they trigger a change event whenever any of
        // their constituent items are changed there's no need to reconcile for regular
        // models. One caveat: this relies on getBackboneModels() to always return the
        // same model instances throughout the lifecycle of the component. If you're
        // using this mixin correctly (it should be near the top of your component
        // hierarchy) this should not be an issue.
        
        var MainWindow = React.createClass({displayName: 'Main Window',
            gameModel: {
                floor: {
                    level: "-1",
                    name: "First time you gonna die",
                    mobs: [
                        {
                            id: 0,
                            name: 'caverat',
                            caption: 'Szczur z kanałów',
                            hp: 25,
                            maxhp: 25,
                            defence: 2,
                            attack: 3,
                            items: []
                        },{
                            id: 1,
                            name: 'rat',
                            caption: 'Brązowy szczur',
                            hp: 15,
                            maxhp: 40,
                            defence: 1,
                            attack: 4,
                            items: []
                        },{
                            id: 2,
                            name: 'troll',
                            caption: 'Lekki Troll',
                            hp: 5,
                            maxhp: 75,
                            defence: 3,
                            attack: 5,
                            items: []
                        }]
                },
                
                hero: {
                    name: "Kondzior",
                    
                    equipment: {
                        items: [],
                        gold: 1564
                    },
                    
                    stats: {
                        'hp': {
                            name: 'hp',
                            caption: 'HP',
                            value: 75,
                            max: 100
                        },
                        'mana': {
                            name: 'mana',
                            caption: 'Mana',
                            value: 200,
                            max: 250
                            
                        },
                        'exp': {
                            name: 'exp',
                            caption: 'Exp',
                            value: 156,
                            max: 1000
                        },
                    },
                    
                    abilities: {
                        'attack': {
                            name: 'attack',
                            caption: 'Attack',
                            value: 15,
                            bonus: 3
                        },
                        
                        'defence': {
                            name: 'defence',
                            caption: 'Defence',
                            value: 30
                        },
                        
                        'magic': {
                            name: 'magic',
                            caption: 'Magic power',
                            value: 13,
                            bonus: 10
                        },
                        
                        'accuracy': {
                            name: 'accuracy',
                            caption: 'Accuracy',
                            value: 26
                        }
                    }
                }
            },
            
            updateModel: function() {
                this.setState(this.gameModel);
            },
            
            // --- GAME CORE FUNCTIONS --- 

            
            // --- SETTERS, GETTERS ----
            setHeroName: function(_name) {
                this.gameModel.hero.name = _name;
                this.updateModel();
            },
            
            setHeroState: function(_statName, _statValue) {
                this.gameModel.hero.states[_statName].value = _statValue;
                this.updateModel();
            },
            
            setHeroStateMax: function(_statName, _stateMaxValue) {
                this.gameModel.hero.states[_statName].max = _stateMaxValue;
                this.updateModel();
            },
            
            onMobClick: function(_mob) {
                //TODO: Change value of damage taken
                var __mob;
                (__mob = this.gameModel.floor.mobs.filter(function(mob) {
                    return mob.id === _mob.id;
                })[0]).hp = __mob.hp-10 >= 0 ? __mob.hp-10 : 0;
                
                this.updateModel();
            },
            
            // --- RENDER FUNCTIONS ---
            getInitialState: function() {
                return this.gameModel;
            },
            
            render: function() {
                return (
                    <div className="mainWindow">
                        <TopBar heroName={this.state.hero.name} setName={this.setHeroName}/>
                        
                        <div className="centerPanel-container" >
                            <div className="centerPanel panel">
                                <FloorWindow onMobClick={this.onMobClick} floor={this.state.floor} />
                            </div>
                        </div>
                        {this.state.hero.name ?
                            <div className="rightPanel panel">
                                <StatsWindow heroAbilities={this.state.hero.abilities} heroStats={this.state.hero.stats} />
                            </div>
                        : null}
                    </div>
                );
                            // <EquipmentWindow />
            }
        });
    
    return MainWindow;
});
