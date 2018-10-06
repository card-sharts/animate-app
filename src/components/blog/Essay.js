import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';
import mockEssay from './mockEssay';

class Essay extends PureComponent {
  state = {
    ...mockEssay
  };
  render() { 
    const { title, photos } = this.state;

    return (
      <section>
        <h2>{title}</h2>
        <Photos photos={photos}/>
      </section>
    );
  }
}
 
export default Essay;