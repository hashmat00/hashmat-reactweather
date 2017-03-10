var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");

var Weather = React.createClass ({
    getInitialState: function () {
      return {
          location: 'San Francisco',
          temp: 44
      }  
    },
    handleSearch: function (location) {
        this.setState({
            location: location,
            temp: 34
        })
    },
    render: function () {
        var {temp, location} = this.state;
        return (
            
            <div>
            <WeatherForm onSearch={this.handleSearch}/>
            <WeatherMessage temp={temp} location={location}/>
            </div>
            )
    }
});

module.exports = Weather;