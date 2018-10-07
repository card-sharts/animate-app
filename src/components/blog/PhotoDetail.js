import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PhotoDetail extends Component {

  static propTypes = {
    photo: PropTypes.object.isRequired
  };

  render() { 
    const { photo } = this.props;

    return (
      <div>
        <img src={photo.url}/>
        <h3>{photo.caption}</h3>
      </div>
    );
  }
}
 
export default PhotoDetail;