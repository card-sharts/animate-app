import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { openUploadWidget } from '../../services/cloudinary';

class PhotoUploader extends Component {
  state = {  }

  context = {
    cloud_name: 'animate',
    upload_preset: 'audapag8'
  };

  uploadImages() {
    const uploadOptions = {
      tags: 'myphotoalbum',
      cloud_name: 'animate',
      upload_preset: 'audapag8'
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        this.props.onPhotosUploaded(photos);
      } else {
        console.log(error);
      }
    });
  }

  render() { 
    return (
      <div>
        <button onClick={this.uploadImages}>Upload Photos</button>
      </div>
    );
  }
}
 
export default PhotoUploader;