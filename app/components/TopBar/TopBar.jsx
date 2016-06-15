define(['react', 'jquery'],
function(React, $){

    var TopBar = React.createClass({displayName: 'Top Bar',
        readName: function() {
            this.props.setName($('#nameInput').val());
        },
        
        render: function() {


            return (
                <nav className="topBar navbar navbar-default">
                  <div className="container-fluid">
                    <div className="navbar-header">
                        <img className="navbar-brand" src='public/img/logo.png' alt="logo"/>
                    </div>
                        {this.props.heroName ? (
                            <p className="heroName navbar-text">You're playing as <b>{this.props.heroName}</b></p>
                        ) : (
                            <form className="navbar-form navbar-left" action="#">
                              <div className="form-group">
                                <input id="nameInput" type="text" className="form-control" placeholder="Type your name" />
                              </div>
                              <button onClick={this.readName} /*type="submit"*/ className="btn btn-default">Play</button>
                            </form>
                        )}
                  </div>
                </nav>
            )
        }
    });
    
    return TopBar;
});

