import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Image, Transformation } from 'cloudinary-react';

class Preview extends PureComponent {

  static propTypes = {
    publicId: PropTypes.string.isRequired
  };

  render() { 
    return (
      <Image
        cloudName="animate"
        publicId={this.props.publicId}
        className="thumbnail inline"
        width="150"
        height="150"
        crop="scale"
        quality="80"
      >
        <Transformation quality="auto" fetchFormat="auto" />
      </Image>
    );
  }
}
 
export default Preview;