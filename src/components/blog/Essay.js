import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';
import mockEssay from './mockEssay';
import ReactModal from 'react-modal';

class Essay extends PureComponent {
  state = {
    ...mockEssay,
    showModal: false
  };

  handleToggleModal = () => {
    let { showModal } = this.state;
    this.setState({ showModal: !showModal });
  };

  // handleCloseModal() {
  //   this.setState({ showModal: false })
  // }

  render() { 
    const { title, photos } = this.state;

    return (
      <section>
        <h2>{title}</h2>
        <Photos photos={photos} toggleModal={this.handleToggleModal}/>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel='modalTest'
          ariaHideApp={false}
        >
          <h2>I am a modal component</h2>
        </ReactModal>
      </section>
    );
  }
}
 
export default Essay;