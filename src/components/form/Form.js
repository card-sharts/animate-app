import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PhotosUploader from './PhotosUploader'
import styles from './Form.css';


class Form extends PureComponent {
  state = {
    essay: {},
    photos: [],
    references: []
  };
  

  render() { 
    return (
      <section className={styles.form}>
        <h2>Form</h2>
        <input/>
        <PhotosUploader/>
      </section>
      
    );
  }
}
 
export default Form;