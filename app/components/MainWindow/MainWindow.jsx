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
                    name: "First time you gonna die"
                },
                
                hero: {
                    name: "Gienio",
                    
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
                        
                        'defense': {
                            name: 'defense',
                            caption: 'Defense',
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
                                <FloorWindow floor={this.state.floor} />
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
