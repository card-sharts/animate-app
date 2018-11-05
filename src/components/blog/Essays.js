import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadEssays } from './actions';
import { getEssays } from './reducers';
import styles from './Essays.css';

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
    const [featured, ...rest] = essays;

    return (
      <div >
        {featured &&
          <section className={styles.essays}>
            <section className="featured">
              <h2>Featured Wedding</h2>
              <NavLink exact to={`/essay/${featured._id} `}>
                <img src={featured.featuredPhotoUrl}/>
                <h3>{featured.title}</h3>
              </NavLink>
            </section>
            <section className="essays">
              {rest.map(essay => (
                <NavLink 
                  exact to={`/essay/${essay._id} `}
                  key={essay._id}
                >
                  <img src={essay.featuredPhotoUrl}/>
                  <h3>{essay.title}</h3>
                  <h4>Photography by: Unknown</h4>
                </NavLink>
              ))}
            </section>
          </section>
          
        }
      
      </div>
      
    );
  }
}
 
export default connect(
  state => ({ essays: getEssays(state) }),
  { loadEssays }
)(Essays);