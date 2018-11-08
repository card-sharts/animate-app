import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import styles from './Photos.css';

class Photos extends PureComponent {

  static propTypes = {
    photos: PropTypes.array.isRequired,
  };

  render() { 
    const { photos } = this.props;
    return (
      <div className={styles.photos}>
        {
          photos.map(photo => (
            <Photo key={photo._id} photo={photo}/>
          ))
        }
      </div>
    );
  }
}
 
export default Photos;