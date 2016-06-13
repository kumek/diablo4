define(['react'],
function(React) {
    var TopBar = React.createClass({displayName: 'Top Bar',
        render: function() {
            return (
                <div className="topBar">Top Bar</div>
            )
        }
    });
    
    return TopBar;
});

