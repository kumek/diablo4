define([
    'react', 
    'components/TopBar', 
    'components/EquipmentWindow',
    'components/StatsWindow',
    'components/FloorWindow'
    ], function(React, TopBar, EquipmentWindow, StatsWindow, FloorWindow) {
        var MainWindow = React.createClass({displayName: 'Main Window',
            gameModel: {
                floor: {
                    level: "-1",
                    name: "First level below the ground",
                    mobs: [
                        {
                            id: 0,
                            name: 'caverat',
                            caption: 'Szczur z kanałów',
                            hp: 25,
                            maxhp: 25,
                            defence: 2,
                            attack: 3,
                            exp: 25,
                            items: []
                        },{
                            id: 1,
                            name: 'rat',
                            caption: 'Brązowy szczur',
                            hp: 15,
                            maxhp: 40,
                            defence: 1,
                            attack: 4,
                            exp: 35,
                            items: []
                        },{
                            id: 2,
                            name: 'troll',
                            caption: 'Lekki Troll',
                            hp: 5,
                            maxhp: 75,
                            defence: 3,
                            attack: 5,
                            exp: 50,
                            items: []
                        }]
                },
                
                hero: {
                    name: "Parry Hotter",
                    equipment: {
                        items: [],
                        gold: 1564
                    },
                    
                    stats: {
                        'hp': {
                            name: 'hp',
                            caption: 'HP',
                            value: 75,
                            max: 100
                        },
                        'mana': {
                            name: 'mana',
                            caption: 'Mana',
                            value: 200,
                            max: 250
                            
                        },
                        'exp': {
                            name: 'exp',
                            caption: 'Exp',
                            value: 156,
                            max: 1000
                        },
                    },
                    
                    abilities: {
                        'attack': {
                            name: 'attack',
                            caption: 'Attack',
                            value: 15,
                            bonus: 3
                        },
                        
                        'defence': {
                            name: 'defence',
                            caption: 'Defence',
                            value: 30
                        },
                        
                        'magic': {
                            name: 'magic',
                            caption: 'Magic power',
                            value: 13,
                            bonus: 10
                        },
                        
                        'accuracy': {
                            name: 'accuracy',
                            caption: 'Accuracy',
                            value: 26
                        }
                    }
                }
            },
            
            updateModel: function() {
                this.setState(this.gameModel);
            },
            
            // --- GAME CORE FUNCTIONS --- 

            
            // --- SETTERS, GETTERS ----
            setHeroName: function(_name) {
                this.gameModel.hero.name = _name;
                this.updateModel();
            },
            
            setHeroState: function(_statName, _statValue) {
                this.gameModel.hero.states[_statName].value = _statValue;
                this.updateModel();
            },
            
            setHeroStateMax: function(_statName, _stateMaxValue) {
                this.gameModel.hero.states[_statName].max = _stateMaxValue;
                this.updateModel();
            },
            
            onMobClick: function(_mob) {
                var __mob, __damage;
                
                //Get mob that action goes from/to
                __mob = this.gameModel.floor.mobs.filter(function(mob) {
                    return mob.id === _mob.id;
                })[0];
                
                
                console.log("__mob.hp: " + __mob.hp);
                
                //Calculate damage taken to monster
                var __tmpDmg
                __damage = ((__tmpDmg = (this.gameModel.hero.abilities.attack.value-_mob.defence)) > __mob.hp) ? __mob.hp : __tmpDmg;
                console.log("__damage: " + __damage);
                
                //Decrease monster's hp value
                __mob.hp = (__mob.hp-__damage <= 0) ? 0 : __mob.hp-__damage;
                
                
                //Show damage
                __mob.showDamage = __damage;
                setTimeout(function() {
                    __mob.showDamage = null;
                    this.updateModel();
                }.bind(this), 1000);
                
                //Decrease hero's hp value
                this.gameModel.hero.stats.hp.value -= __mob.attack;
                
                
                
                this.updateModel();
            },
            
            // --- RENDER FUNCTIONS ---
            getInitialState: function() {
                return this.gameModel;
            },
            
            render: function() {
                return (
                    <div className="mainWindow">
                        <TopBar heroName={this.state.hero.name} setName={this.setHeroName}/>
                        
                        <div className="centerPanel-container" >
                            <div className="centerPanel panel">
                                <FloorWindow onMobClick={this.onMobClick} floor={this.state.floor} />
                            </div>
                        </div>
                        {this.state.hero.name ?
                            <div className="rightPanel panel">
                                <StatsWindow heroAbilities={this.state.hero.abilities} heroStats={this.state.hero.stats} />
                            </div>
                        : null}
                    </div>
                );
                            // <EquipmentWindow />
            }
        });
    
    return MainWindow;
});
