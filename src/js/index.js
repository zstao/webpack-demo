var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var NotFoundRoute = Router.NotFoundRoute;


require('../scss/index.scss');

var Header = require('./header');
var Footer = require('./footer');

var App = React.createClass({
    render: function(){
        return(
            <div>
                <h1>App</h1>
                <RouterHandler />
            </div>
        )
    }
});

var About = React.createClass({
    render: function(){
        return(
            <h2>About</h2>
        )
    }
});

var Inbox = React.createClass({
    render: function () {
        return (
            <h2>Inbox</h2>
        )
    }
});

var Message = React.createClass({
    getInitialState: function(){
      return{
          id: ''
      }
    },
    componentDidMount: function () {
        // from the path `/inbox/messages/:id`
        var id = this.props.params.id;
        this.setState({id: id});
    },
    render: function () {
        return (
            <h3>Message {this.state.id}</h3>
        )
    }
});

var Home =React.createClass({
    render: function(){
        return(
            <div>
                <h2>Home</h2>
            </div>
        )
    }
});

var NotFound =React.createClass({
    render: function(){
        return(
            <div>
                <h2>NotFound</h2>
            </div>
        )
    }
});

var routes =(
    <Route hander={App}>
        <DefaultRoute handler={Home}/>
        <Route path="about" handler={About}/>
        <Route path="inbox" >
            <Route path="messages/:id" handler={Message}/>
            <DefaultRoute handler={Message}/>
            <NotFoundRoute handler={NotFound} />
        </Route>
        <NotFoundRoute handler={NotFound} />
    </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
    React.render(<Root />, document.getElementById('body'));
});
