define(['react', 'components/TopBar'],
function(React, TopBar) {
    var MainWindow = React.createClass({displayName: 'Main Window',
        render: function() {
            return (
                <div className="mainWindow">
                <TopBar />
                </div>
            )
        }
    });
    
    return MainWindow;
});

