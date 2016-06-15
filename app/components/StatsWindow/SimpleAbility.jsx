// tutorial1-raw.js
define(['react'],
function(React) {
    var SimpleAbility = React.createClass({displayName: 'SimpleAbility',
        
        render: function() {
            return (
                <div className="simple-ability simple-ability">
                    <img className="ability-icon" 
                        src={"public/img/abilities/" + this.props.ability.name + ".png"} >
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