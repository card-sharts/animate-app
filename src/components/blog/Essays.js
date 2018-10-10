import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadEssays } from './actions';
import { getEssays } from './reducers';

class Essays extends PureComponent {

  static propTypes = {
    loadEssays: PropTypes.func.isRequired,
    essays: PropTypes.array,
    match: PropTypes.object
  };

  componentDidMount() {
    this.props.loadEssays();
  }

  render() { 
    const { essays } = this.props;

    return (
      <div>
        <h2>Featured Essay</h2>
        {/* <NavLink exact to="/essay/:id">Ride or Die</NavLink> */}
        {essays && 
          essays.map(essay => (
            <NavLink 
              exact to={`/essay/${essay._id} `}
              key={essay._id}
            >{essay.title}</NavLink>
          ))
        }

      </div>
      
    );
  }
}
 
export default connect(
  state => ({ essays: getEssays(state) }),
  { loadEssays }
)(Essays);