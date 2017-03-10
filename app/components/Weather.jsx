var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");

var Weather = React.createClass ({
    getInitialState: function () {
      return {
          location: 'San Francisco',
          temp: 44
      }  
    },
    
    handleSearch: function (location) {
        var that = this;
        
        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp
            });
        }, function (errorMessage) {
            alert(errorMessage);
        });
        
        // this.setState({
        //     location: location,
        //     temp: 34
        // })
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