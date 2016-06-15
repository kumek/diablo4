// tutorial1-raw.js
define([
    'react',
    'components/SimpleStat'
    ],
function(React, SimpleStat) {
    var StatsWindow = React.createClass({displayName: 'Stats Window',
        render: function() {
            return (
                <div className="stats-window panel panel-default">
                    <div className="window-title">
                        <h3>Stats</h3>
                    </div>
                    <div className="panel-body">
                        <div className="stat-list">
                            {this.props.heroStats.map(function(_stat) {
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