import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Photo.css';

class Photo extends PureComponent {
  static propTypes = {
    photo: PropTypes.object.isRequired
  };

  render() { 
    const { url, _id } = this.props.photo;
    return (
      <div className={styles.photo}>
        <Link to={`/photo/${_id}`}>
          <img src={url}/>
        </Link>
      </div>
    );
  }
}
 
export default Photo;