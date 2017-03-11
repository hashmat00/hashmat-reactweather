var React = require("react");


var WeatherMessage = ({temp, location}) => {
    
    return (
            <div>
        
            <h3 className="text-center">Its {temp} Fahr degreee in {location}</h3>
            
            </div>
            
            )
}



module.exports = WeatherMessage;