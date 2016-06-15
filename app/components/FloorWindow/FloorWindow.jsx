// tutorial1-raw.js
define(['react'],
function(React) {
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
                </div>
            )
        }
    });
    
    return FloorWindow;
});