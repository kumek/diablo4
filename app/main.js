// tutorial1-raw.js
require.config({
  baseUrl: 'public',
  paths: {
    react: 'js/react',
    reactDom: 'js/react-dom.min',
    jquery: 'js/jquery.min'
  }
});

require([
  'jquery', 'react', 'reactDom', 'components/MainWindow'
  ], function($, React, ReactDOM, MainWindow) {
    console.log($('#content'));
    ReactDOM.render(React.createElement(MainWindow, null),$('#content')[0]);
});
