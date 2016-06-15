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
            gameModel: new GameModel({
                heroName: null,
                
                heroStats: [
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
                
                setAttribute: function(_component){
                    return function(_attrName, _attrValue) {
                        this.gameModel.set(_attrName, _attrValue);
                        _component.forceUpdate();
                        
                    }
                },
                
                // setHeroName: function(_name) {
                //     this.gameModel.set('heroName', _name);
                // }
            }),
                
            getInitialState: function() {
                
                // return {
                //     heroName: "Pan Srumpirr",
                //     heroStats: [
                //         {
                //             name: 'hp',
                //             caption: 'HP',
                //             value: 75,
                //             max: 100
                //         },
                //         {
                //             name: 'mana',
                //             caption: 'Mana',
                //             value: 200,
                //             max: 250
                            
                //         },
                //         {
                //             name: 'exp',
                //             caption: 'Exp',
                //             value: 156,
                //             max: 1000
                //         }
                //     ]
                // }
                return this.gameModel;
            },
            
            // setName: function(_name) {
            //   this.setState({
            //       heroName: _name
            //   });
            // },
            
            // setName: function(name) {
            //     this.gameModel.
            //     console.log("MODEL NAME SETTING");
            //     this.gameModel.set('heroName', name);
            //     // this.setState(this.gameModel);
            //     this.forceUpdate();
            // },
            
            // setName: function(name) {
            //     return function(name) {
            //         alert("Witaj " + name);
            //     }
            // },
    
            render: function() {
                return (
                    <div className="mainWindow">
                        <TopBar gameModel={this.state} /*heroName={this.state.get('heroName')}*/ setAttribute={(this.state.get('attribute'))(this)}/>
                        {this.state.get('heroName') ?
                             <div className="rightPanel panel">
                                <StatsWindow gameModel={this.state} /*heroStats={this.state.get('heroStats')}*//>
                            </div>
                        : null}
                    </div>
                )
                            // <EquipmentWindow />
            }
        });
    
    return MainWindow;
});
