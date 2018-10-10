import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import styles from './Photos.css';

class Photos extends PureComponent {

  static propTypes = {
    photos: PropTypes.array.isRequired,
    toggleModal: PropTypes.func.isRequired
  };

  render() { 
    const { photos, toggleModal } = this.props;
    return (
      <section className={styles.photos}>
        {
          photos.map(photo => (
            <Photo key={photo._id} photo={photo} toggleModal={toggleModal}/>
          ))
        }
      </section>
    );
  }
}
 
export default Photos;