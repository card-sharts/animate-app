import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Image, Transformation } from 'cloudinary-react';

class Preview extends PureComponent {

  static propTypes = {
    publicId: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  handleClick = () => {
    const { publicId, onClick } = this.props;
    onClick(publicId);
  };

  render() { 
    return (
      <Image
        cloudName="animate"
        publicId={this.props.publicId}
        className="thumbnail block"
        onClick={this.handleClick}
        height="150"
        crop="scale"
        quality="100"
      >
        <Transformation quality="auto" fetchFormat="auto" />
      </Image>
    );
  }
}
 
export default Preview;