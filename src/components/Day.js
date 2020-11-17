import React from 'react';
import PropTypes from 'prop-types';


function Day(props){
  return(
    <React.Fragment>
      <h4>{props.name}</h4>
      <p><b>Farmer's Market:</b> {props.location}</p>
      <p><b>Hours:</b>  {props.hours}</p>
      <p><b>Booth:</b>  {props.booth}</p>
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