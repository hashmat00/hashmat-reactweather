var React = require("react");
var ReactDOM = require("react-dom");
var {React, Router, IndexRoute, hashHistory} = require("react-router");


var Main = require("main");
var Nav = require("nav");
ReactDOM.render(
  <Router history={hashHistory}>
     <Route path="/" component={Main}>
     
     </Route>
  </Router>,
  document.getElementById('app')
);


// welcome to react 