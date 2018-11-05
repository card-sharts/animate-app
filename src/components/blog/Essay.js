import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { getSelectedPhoto, getSelectedEssay } from './reducers';
import { loadEssay } from './actions';

class Essay extends PureComponent {
  state = {
    showModal: false,
    essay: null
  };

  static propTypes = {
    selectedPhoto: PropTypes.object,
    match: PropTypes.object,
    loadEssay: PropTypes.func.isRequired
  };
  
  componentDidMount() {
    const { loadEssay, match } = this.props;
    loadEssay(match.params.id);
  }

  handleToggleModal = () => {
    let { showModal } = this.state;
    this.setState({ showModal: !showModal });
  };

  render() { 
    const { title, photos } = this.state;
    const { selectedPhoto } = this.props;

    return (
      <section>
        <h2>{title}</h2>
        <Photos photos={photos} toggleModal={this.handleToggleModal}/>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel='modalTest'
          ariaHideApp={false}
        >
          {selectedPhoto && 
            <Fragment>
              <button onClick={this.handleToggleModal}>Close</button>
              <h2>{selectedPhoto.caption}</h2>
              <h2>{selectedPhoto._id}</h2>
              <img src={selectedPhoto.url}/>
            </Fragment>
          }
        </ReactModal>
      </section>
    );
  }
}
 
export default connect(
  (state) => ({
    selectedPhoto: getSelectedPhoto(state),
    essay: getSelectedEssay(state)
  }),
  { loadEssay }
)(Essay);