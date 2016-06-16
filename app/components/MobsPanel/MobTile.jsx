// tutorial1-raw.js
define([
    'react',
    'jquery',
    'assets'
    ], function(React, $, Assets) {
    var MobTile = React.createClass({displayName: 'MobTile',
        render: function() {
            var progressValue = this.props.mob.hp/this.props.mob.maxhp;
            
            var progressColor = function(_value) {
                if(_value < 0.3) {
                    return '#A1110A';
                }
                if(_value < 0.6) {
                    return '#E58827';
                }
                
                if(_value < 0.8) {
                    return '#FFCC00';
                }
                return '#1E9153';
            }(progressValue);
            
            return (
                <div className="mob-tile" id={this.props.mob.id} style={{backgroundImage: 'url(' + Assets.monsters[this.props.mob.name] + ')'}}
                    onClick={this.props.onMobClick.bind(null, this.props.mob)}>
                    {this.props.mob.showDamage ? 
                        <div className="damage-taken">
                            {this.props.mob.showDamage}
                        </div>
                    : null}
                    
                    {this.props.mob.hp === 0 ? 
                        <span className="mob-dead glyphicon glyphicon-remove">
                        </span> 
                    : null }
                    
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
                                style={{
                                    width: (100*progressValue)+'%',
                                    backgroundColor: progressColor
                                }}>
                            </div>
                    </div>
                </div>
            )
        }
    });
    
    return MobTile;
});