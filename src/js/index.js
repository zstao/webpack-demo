var React = require('react');

require('../scss/index.scss');

var Header = require('./header');
var Footer = require('./footer');

React.render(
    <Header />,
    document.getElementById('header')
);

React.render(
    <Footer />,
    document.getElementById('footer')
);