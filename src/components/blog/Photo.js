import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Image, Transformation } from 'cloudinary-react';
import styles from './Photo.css';

class Photo extends PureComponent {
  static propTypes = {
    photo: PropTypes.object.isRequired,
  };

  render() { 
    const { photoUrl } = this.props.photo;

    return (
      <article className={styles.photo}>
        <Image
          cloudName="animate"
          publicId={photoUrl}
          type="fetch"
        >
          <Transformation
            quality="auto"
            height="790"
            crop="scale"
            fetchFormat="auto"
          />
        </Image>
      </article>
    );
  }
}
 
export default Photo;