// tutorial1-raw.js
define(['react'],
function(React) {
    var SimpleStat = React.createClass({displayName: 'SimpleStat',
        
        
        render: function() {
            return (
                <div className="simple-stat">
                    <div className="simple-stat-name">
                        {this.props.stat.caption}
                    </div>
                    <div className="simple-stat-value-container">
                        <div className="stat-progress progress">
                            <div className={"progress-bar progress-bar-" + this.props.stat.name} 
                                    role="progressbar"
                                    aria-valuenow={this.props.stat.value} 
                                    aria-valuemin="0" 
                                    aria-valuemax={this.props.stat.max} 
                                    style={{width: (100*this.props.stat.value/this.props.stat.max) + '%'}} >
                            </div>
                        </div>
                        <div className="stat-progress-caption">
                            {this.props.stat.value}/{this.props.stat.max}
                        </div>
                    </div>
                </div>
            )
        }
    });
    
    return SimpleStat;
});