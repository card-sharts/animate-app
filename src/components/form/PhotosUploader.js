import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { openUploadWidget } from '../../services/cloudinary';
import { photosUploaded } from './actions';

class PhotoUploader extends Component {
  state = {  }

  static propTypes = {
    photos: PropTypes.array,
    photosUploaded: PropTypes.func.isRequired
  };

  uploadImages = () => {
    const uploadOptions = {
      tags: ['myphotoalbum'],
      cloud_name: 'animate',
      upload_preset: 'audapag8'
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if(!error) {
        this.props.photosUploaded(photos);
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
 
export default connect(
  state => ({ photos: state.photos }),
  { photosUploaded }
)(PhotoUploader);