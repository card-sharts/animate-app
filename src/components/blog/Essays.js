import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
              <EssayTile essay={featured}/>
            </section>

            <section className="essays">
              {rest.map(essay => (
                <EssayTile key={essay._id} essay={essay}/>
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

const EssayTile = ({ essay }) => (
  <div>
    <Link exact to={`/essay/${essay._id}`}>
      <img src={essay.featuredPhotoUrl}/>
    </Link>
    <hgroup>
      <Link exact to={`/essay/${essay._id}`}>
        <h3>{essay.title}</h3>
      </Link>
      <h4>Photography by: Unknown</h4>
    </hgroup>

  </div>
);