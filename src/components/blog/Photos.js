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
        <h2>Photos</h2>
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