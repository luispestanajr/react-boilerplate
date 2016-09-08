//Requires
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
var ReactRouter = require('react-router');
var PureRenderMixin = require('react-addons-pure-render-mixin');

//Configurações
var browserHistory = ReactRouter.browserHistory;
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;

//Carregar o CSS inicial
require("./app.css");

//Classe inicial
class App extends Component{
  constructor() {
      super();

      //Iniciar o state aqui
      this.state = {};
  }

  render(){
    return (
      <div>
        <div id="header"></div>
        <div className="container">
          <h1>ReactJS is now running</h1>
        </div>
      </div>
    )
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
  </Router>
), document.getElementById('main'))
