define([
    'react', 
    'components/TopBar', 
    'components/EquipmentWindow',
    'components/StatsWindow'
    ], function(React, TopBar, EquipmentWindow, StatsWindow) {
        
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
                hero: {
                    name: "Pan Kumpir",
                    
                    equipment: {
                        items: [],
                        gold: 1564
                    },
                    
                    stats: [
                        {
                            name: 'hp',
                            caption: 'HP',
                            value: 75,
                            max: 100
                        },
                        {
                            name: 'mana',
                            caption: 'Mana',
                            value: 200,
                            max: 250
                            
                        },
                        {
                            name: 'exp',
                            caption: 'Exp',
                            value: 156,
                            max: 1000
                        }
                    ],
                    
                    //hero functions:
                    setName: function(_name) {
                        this.gameModel.hero.name = _name;
                        this.setState(this.gameModel);
                    }
                }
            },

            getInitialState: function() {
                return this.gameModel;
            },
    
            render: function() {
                return (
                    <div className="mainWindow">
                        <TopBar heroName={this.state.hero.name} setAttribute={this.state.hero.setName}/>
                        {this.state.get('heroName') ?
                             <div className="rightPanel panel">
                                <StatsWindow gameModel={this.state} /*heroStats={this.state.get('heroStats')}*//>
                            </div>
                        : null}
                    </div>
                );
                            // <EquipmentWindow />
            }
        });
    
    return MainWindow;
});
