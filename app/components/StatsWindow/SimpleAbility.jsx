// tutorial1-raw.js
define([
    'react',
    'assets'
    ], function(React, Assets) {
    var SimpleAbility = React.createClass({displayName: 'SimpleAbility',
        
        render: function() {
            return (
                <div className="simple-ability simple-ability">
                    <img className="ability-icon" 
                        src={Assets.icons['hero_' + this.props.ability.name]} >
                    </img>
                    <div className="ability-value">
                        {this.props.ability.value}
                        
                        {this.props.ability.bonus? 
                            <span className="ability-bonus">
                                (+{this.props.ability.bonus})
                            </span>
                        : null }
                    </div>
                </div>
            )
        }
    });
    
    return SimpleAbility;
});