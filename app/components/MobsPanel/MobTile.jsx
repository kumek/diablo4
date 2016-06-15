// tutorial1-raw.js
define(['react', 'assets'],
function(React, Assets) {
    var MobTile = React.createClass({displayName: 'MobTile',
    
        render: function() {
            return (
                <div className="mobs-tile" style={{backgroundImage: 'url(' + Assets.monsters[this.props.mob.name] + ')'}}
                    onClick={this.props.onMobClick.bind(null, this.props.mob)}>
                    <div className="stats">
                        <span className="stats-attack">
                            {this.props.mob.attack}
                        </span>
                        <span className="stats-defence">
                            {this.props.mob.defence}
                        </span>
                    </div>
                    <div className="hp-bar progress">
                            <div 
                                className="progress-bar"
                                role="progressbar" 
                                aria-valuenow={this.props.mob.hp} 
                                aria-valuemin="0" 
                                aria-valuemax={this.props.mob.maxhp} 
                                style={{width: 100*(this.props.mob.hp/this.props.mob.maxhp)+'%'}}>
                            </div>
                        
                    </div>
                    
                </div>
            )
        }
    });
    
    return MobTile;
});