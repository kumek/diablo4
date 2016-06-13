// tutorial1-raw.js
define(['react'],
function(React) {
    var StatsWindow = React.createClass({displayName: 'Stats Window',
        render: function() {
            return (
                <div>Stats window</div>
            )
        }
    });
    
    return StatsWindow;
});