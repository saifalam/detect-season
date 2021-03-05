import './SeasonDisplay.css';
import React from 'react';

// provides necessary data to dispaly on the screen
const seasonConfig = {
    summer: {
        text: "It's time to chill and enjoy the beach!!!",
        iconName: "sun"
    },
    winter: {
        text: "Let the snowfall begin ",
        iconName: "snowflake"
    }
};

/**  
 * Determine the current season
 * input  @lat = Curent position latitude
 * input  @month = Running month as a number (like 1 to 12)
 * output @return current season
 */ 
const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'summer': 'winter';
    } else {
        return lat > 0 ? 'winter': 'summer';
    }
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    return (
        <div className= {`season-dispaly ${season}`} >
            <i className={`icon-left massive ${iconName} icon` }/>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon` }/>
        </div>
    );
}

export default SeasonDisplay;