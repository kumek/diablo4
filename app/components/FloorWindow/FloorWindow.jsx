// tutorial1-raw.js
define([
    'react',
    'components/MobsPanel'
],
function(React, MobsPanel) {
    var FloorWindow = React.createClass({displayName: 'FloorWindow',
    
        render: function() {
            return (
                <div className="floor-window">
                    <h1 className="window-title">
                        <span className="floor-level">
                            {this.props.floor.level}
                        </span>
                        <span className="floor-name">
                            "{this.props.floor.name}"
                        </span>
                    </h1>
                    <hr/>
                    <MobsPanel onMobClick={this.props.onMobClick} mobs={this.props.floor.mobs} />
                </div>
            )
        }
    });
    
    return FloorWindow;
});