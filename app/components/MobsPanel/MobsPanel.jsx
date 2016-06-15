// tutorial1-raw.js
define([
    'react',
    'components/MobTile'
    ],
function(React, MobTile) {
    var MobsPanel = React.createClass({displayName: 'MobsPanel',
    
        render: function() {
            return (
                <div className="mobs-panel panel panel-default">
                    <div className="panel-heading">
                        <h4 className="window-title">
                            Mobs
                        </h4>
                    </div>
                    <div className="panel-body">
                        <div className="mobs-list">
                            {this.props.mobs.map(function(mob) {
                                return (
                                    <div>
                                        <MobTile onMobClick={this.props.onMobClick} mob={mob} />
                                    </div>
                                )
                            }.bind(this))}
                        </div>
                    </div>
                </div>
            )
        }
    });
    
    return MobsPanel;
});