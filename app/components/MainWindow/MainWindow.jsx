define(['react', 'components/TopBar', 'models/Game'],
function(React, TopBar, Game) {
    var gameModel = new Game({
        heroName: "Pan Kumpir"
    });
    
    var MainWindow = React.createClass({displayName: 'Main Window',
        getInitialState: function() {
            return {
                heroName: null
            }
        },
        
        setName: function(_name) {
           this.setState({
               heroName: _name
           });
        },

        render: function() {
            console.log(this.state.heroName);
            return (
                <div className="mainWindow">
                    <TopBar heroName={this.state.heroName} setName={this.setName} />
                </div>
            )
        }
    });
    
    return MainWindow;
});
