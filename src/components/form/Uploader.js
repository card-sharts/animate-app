import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import { uploadPhotos } from '../../services/cloudinary';
import styles from './Dropzone.css';

class Uploader extends PureComponent {

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
          className={styles.dropzone}
        >
          <p>Drop your files or click here to upload</p>
        </Dropzone>
      </div>
    );
  }
}
 
export default Uploader;