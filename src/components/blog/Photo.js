import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Photo.css';

class Photo extends PureComponent {
  static propTypes = {
    photo: PropTypes.object.isRequired
  };

  render() { 
    const { url, caption, tags  } = this.props.photo;
    return (
      <div className={styles.photo}>
        <img src={url}/>
      </div>
    );
  }
}
 
export default Photo;