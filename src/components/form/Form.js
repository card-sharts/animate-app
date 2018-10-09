import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import styles from './Form.css';


class Form extends PureComponent {
  state = {
    essay: {},
    photos: [],
    references: []
  };
  
  handleDrop = files => {

    // cloudinary.openUploadWidget({ 
    //   cloudName: 'demo', uploadPreset: 'preset1'}, (error, result) => { })

    // Push all the axios request promise into a single array
    const uploaders = files.map(file => {
      
      const formData = new FormData();
      formData.append('file', file);
      // formData.append('tags', `codeinfuse, medium, gist`);
      formData.append('upload_preset', 'jxhco1rb');
      formData.append('api_key', '896387744652518');
      formData.append('timestamp', (Date.now() / 1000) | 0);
      
      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      return axios.post('https://api.cloudinary.com/v1_1/animate/image/upload', formData, {
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      }).then(response => {
        const data = response.data;
        const fileURL = data.secure_url; // You should store this URL for future references in your app
        console.log(data);
        return this.setState(({ photos }) => ({ photos: [...photos, fileURL] }));
      });
    });
  
    // Once all the files are uploaded 
    axios.all(uploaders).then(() => {
      // ... perform after upload is successful operation
    });
  };

  render() { 
    return (
      <section className={styles.form}>
        <h2>Form</h2>
        <input/>
        <Dropzone 
          onDrop={this.handleDrop} 
          multiple 
          accept="image/*" 
        >
          <p>Drop your files or click here to upload</p>
        </Dropzone>
        <button>Upload</button>
      </section>
      
    );
  }
}
 
export default Form;