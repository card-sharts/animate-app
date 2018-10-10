import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadEssays } from './actions';
import { getEssays } from './reducers';

class Essays extends PureComponent {

  static propTypes = {
    loadEssays: PropTypes.func.isRequired,
    essays: PropTypes.array
  };

  componentDidMount() {
    this.props.loadEssays();
  }

  render() { 
    return (
      <div>
        <h2>Featured Essay</h2>
        <NavLink exact to="/essay">Ride or Die</NavLink>

      </div>
      
    );
  }
}
 
export default connect(
  state => ({ essays: getEssays(state) }),
  { loadEssays }
)(Essays);