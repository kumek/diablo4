define(['react','models/Item'],
function(React, Item) {
    
    var EquipmentWindow = React.createClass({displayName: 'Equipment Window',
        render: function() {
            return (
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">EQUIPMENT</h3>
                    </div>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Value</th>
                                <th>$</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.props.sword.get("name")}</td>
                                <td>{this.props.sword.get("name")}</td>
                                <td>{this.props.sword.get("name")}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
    });
    
    return EquipmentWindow;
});