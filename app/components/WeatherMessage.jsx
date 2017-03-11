var React = require("react");


var WeatherMessage = ({temp, location}) => {
    
    return (
            <div>
        
            <p>Its {temp} Fahr degreee in {location}</p>
            
            </div>
            
            )
}



module.exports = WeatherMessage;