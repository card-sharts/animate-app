import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import { openUploadWidget } from '../../services/cloudinary';

class Uploader extends Component {
  state = {  }

  static propTypes = {
    previewPhotos: PropTypes.array,
    onPhotosUpload: PropTypes.func.isRequired
  };

  handleDrop = files => {
    // Push all the axios request promise into a single array
    const uploaders = files.map(file => {
      // Initial FormData
      const formData = new FormData();
      formData.append('file', file);
      formData.append('tags', 'photo-essay');
      formData.append('upload_preset', 'pvhilzh7'); // Replace the preset name with your own
      formData.append('api_key', '1234567'); // Replace API key with your own Cloudinary key
      formData.append('timestamp', (Date.now() / 1000) | 0);
      
      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      return axios.post('https://api.cloudinary.com/v1_1/animate/image/upload', formData, {
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      }).then(response => {
        const data = response.data;
        const fileURL = data.secure_url // You should store this URL for future references in your app
        console.log(data);
      })
    });
  
    // Once all the files are uploaded 
    axios.all(uploaders).then(() => {
      // ... perform after upload is successful operation
    });
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