import React from 'react';

function WeatherDisplay({ weather }) {
  const { temperature, conditions } = weather;
  const tempColor = temperature > 20 ? 'red' : 'blue';

  return (
    <div>
      <p style={{ color: tempColor }}>Temperature: {temperature}</p>
      <p>Conditions: {conditions}</p>
      <span style={{ color: tempColor }}>Temperature Color Indicator</span>
    </div>
  );
}

export default WeatherDisplay;
