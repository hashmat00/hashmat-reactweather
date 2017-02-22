var React = require("react");
var ReactDOM = require("react-dom");

var objOne = {
  name: 'hashmat',
  location: 'Antioch, CA'
};

var objTwo = {
   age: 22,
   ...objOne
};

console.log(objTwo);


ReactDOM.render(
  <h1>Hashmat boilerplate app</h1>,
  document.getElementById('app')
);