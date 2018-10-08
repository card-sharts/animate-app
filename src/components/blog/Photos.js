import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
class Photos extends PureComponent {

  static propTypes = {
    photos: PropTypes.array.isRequired
  };

  render() { 
    const { photos } = this.props;
    return (
      <section>
        {
          photos.map(photo => (
            <Photo key={photo._id} photo={photo}/>
          ))
        }
      </section>
    );
  }
}
 
export default Photos;