// tutorial1-raw.js
define([
    'react',
    'components/SimpleStat',
    'components/SimpleAbility'
    ],
function(React, SimpleStat, SimpleAbility) {
    var StatsWindow = React.createClass({displayName: 'Stats Window',
        render: function() {
            
            // var stats = [];
            
            var stats = Object.keys(this.props.heroStats).map(function(key) {
                return this.props.heroStats[key];
            }.bind(this));
            
            var abilities = Object.keys(this.props.heroAbilities).map(function(key) {
                return this.props.heroAbilities[key];
            }.bind(this));
            
            return (
                <div className="stats-window panel panel-default">
                    <div className="window-title">
                        <h3>Stats</h3>
                    </div>
                    <div className="panel-body">
                        <div className="abilities-list">
                            {abilities.map(function(_ability) {
                                return (
                                    <SimpleAbility ability={_ability} />
                                )
                            })}
                        </div>
                        <div className="stat-list">
                            {stats.map(function(_stat) {
                                return (
                                    <SimpleStat stat={_stat} />
                                )
                            })}
                        </div>
                    </div>
                </div>
            )
                            
        }
    });
    
    return StatsWindow;
});