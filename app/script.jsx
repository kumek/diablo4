// tutorial1-raw.js


var CommentBox = React.createClass({displayName: 'CommentBox',
  render: function() {
    return (
      <div></div>
      );
  }
});
ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
