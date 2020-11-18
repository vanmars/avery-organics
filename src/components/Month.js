import React from 'react';
import PropTypes from 'prop-types';

function Month(props) {
  return(
    <React.Fragment>
      <h4 id="month-header">{props.name}</h4>
      <ul>
        {props.selection.map((product) =>
          <li>{product}</li>
        )}
       </ul>
    </React.Fragment>
  )
}

Month.propTypes = {
  name: PropTypes.string,
  selection: PropTypes.arrayOf(PropTypes.string)
}

export default Month;