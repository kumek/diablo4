// tutorial1-raw.js
require.config({
  baseUrl: 'public',
  paths: {
    react: 'js/react',
    reactDom: 'js/react-dom.min',
    jquery: 'js/jquery.min',
    backbone: 'js/backbone-min',
    underscore: 'js/underscore-min'
  }
});

require([
  'jquery', 'react', 'reactDom', 'components/MainWindow'
  ], function($, React, ReactDOM, MainWindow) {
    ReactDOM.render(React.createElement(MainWindow, null), document.body);
});
