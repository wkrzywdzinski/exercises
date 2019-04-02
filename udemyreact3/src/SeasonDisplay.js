import React from "react";
import "./SeasonDisplay.css";
// ^^webpack attaches the css file
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const seasonConfig = {
  summer: {
    text: "let's go to a beach!",
    iconName: "sun"
  },
  winter: {
    text: "hope you have warm shoes!",
    iconName: "snowflake"
  }
};
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text = seasonConfig[season].text;
  const iconName = seasonConfig[season].iconName;
  // ES6 alternative > const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
