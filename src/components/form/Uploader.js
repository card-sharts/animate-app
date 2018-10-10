import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import { uploadPhotos } from '../../services/cloudinary';

class Uploader extends Component {
  state = {  }

  static propTypes = {
    previewPhotos: PropTypes.array,
    onPhotosUpload: PropTypes.func.isRequired
  };

  handleDrop = files => {
    return uploadPhotos(files)
      .then(res => {
        this.props.onPhotosUpload(res);
      });
  };

  render() { 
    return (
      <div>
        <Dropzone 
          onDrop={this.handleDrop} 
          multiple 
          accept="image/*" 
          // style={styles.dropzone}
        >
          <p>Drop your files or click here to upload</p>
        </Dropzone>
      </div>
    );
  }
}
 
export default Uploader;