import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { openUploadWidget } from '../../services/cloudinary';

class Uploader extends Component {
  state = {  }

  static propTypes = {
    previewPhotos: PropTypes.array,
    onPhotosUpload: PropTypes.func.isRequired
  };

  uploadImages = () => {
    const uploadOptions = {
      tags: ['myphotoalbum'],
      cloudName: 'animate',
      uploadPreset: 'audapag8'
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if(!error) {
        this.props.onPhotosUpload(photos);
      } else {
        console.log(error);
      }
    });
  };

  render() { 
    return (
      <div>
        <button onClick={this.uploadImages}>Upload Photos</button>
      </div>
    );
  }
}
 
export default Uploader;