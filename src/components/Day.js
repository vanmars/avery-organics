import React from 'react';
import PropTypes from 'prop-types';

function Day(props){
  return(
    <React.Fragment>
      <h4 id="day-name">{props.name}</h4>
      <p><span>Farmer's Market:</span><br/> {props.location}</p>
      <p><span>Hours:</span><br/>  {props.hours}</p>
      <p><span>Booth:</span><br/>  {props.booth}</p>
    </React.Fragment>
  );
}

Day.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string,
}

export default Day;