import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class Essays extends PureComponent {
  state = {  }
  render() { 
    return (
      <div>
        <h2>Featured Essay</h2>
        <NavLink exact to="/essay">Ride or Die</NavLink>

      </div>
      
    );
  }
}
 
export default Essays;