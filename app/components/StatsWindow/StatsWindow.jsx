// tutorial1-raw.js
define(['react'],
function(React) {
    var StatsWindow = React.createClass({displayName: 'Stats Window',
        render: function() {
            var statsElements = [];
            this.props.heroStats.forEach(function(stat) {
                statsElements.push(
                    (
                        <div className="stat-element">
                            <div className="stat-name">
                                {stat.name}
                            </div>
                            <div className="stat-progress progress">
                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={stat.value} aria-valuemin="0" aria-valuemax={stat.max} style={{width: (100*stat.value/stat.max) + '%'}} >
                                    <span className="stat-progress-caption">
                                        {stat.value}/{stat.max}
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                    )
                );
            });
            console.log(statsElements);
            return (
                <div className="stats-window panel panel-default">
                    <div className="panel-title">
                        Stats
                    </div>
                    <div className="panel-body">
                        <div className="stat-list">
                        {statsElements[0]}
                        {statsElements[1]}
                        {statsElements[2]}
                        </div>
                    </div>
                </div>
            )
                        // {statsElements.forEach(function(stat){
                        //     stat
                        // })}
        }
    });
    
    return StatsWindow;
});