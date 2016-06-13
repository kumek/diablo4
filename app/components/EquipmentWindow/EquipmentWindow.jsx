define(['react'],
function(React) {
    var EquipmentWindow = React.createClass({displayName: 'Equipment Window',
        render: function() {
            return (
                <div className="panel panel-primary">
                 <div class="panel-heading">
                <h3 class="panel-title">EQUIPMENT</h3>
                </div>
                <div class="panel-body">
                Panel content
                </div>
                </div>
            )
        }
    });
    
    return EquipmentWindow;
});