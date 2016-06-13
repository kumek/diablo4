define([
    'react', 
    'components/TopBar', 
    'components/EquipmentWindow',
    'components/StatsWindow'
    ], function(React, TopBar, EquipmentWindow, StatsWindow) {

    var MainWindow = React.createClass({displayName: 'Main Window',
        getInitialState: function() {
            return {
                heroName: null,
                heroStats: [
                    {
                        name: 'HP',
                        value: 75,
                        max: 100
                    },
                    {
                        name: 'Mana',
                        value: 200,
                        max: 250
                    },
                    {
                        name: 'Exp',
                        value: 156,
                        max: 1000
                    }
                ]
            }
        },
        
        setName: function(_name) {
          this.setState({
              heroName: _name
          });
        },

        render: function() {
            return (
                <div className="mainWindow">
                    <TopBar heroName={this.state.heroName} setName={this.setName}/>
                     <div className="rightPanel">
                        <EquipmentWindow />
                        <StatsWindow heroStats={this.state.heroStats}/>
                    </div>
                </div>
            )
        }
    });
    
    return MainWindow;
});
