import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';
import mockEssay from './mockEssay';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { getSelectedPhoto, getSelectedEssay } from './reducers';
import { loadEssay } from './actions';

class Essay extends PureComponent {
  state = {
    ...mockEssay,
    showModal: false,
  };

  static propTypes = {
    selectedPhoto: PropTypes.object,
    essay: PropTypes.object,
    match: PropTypes.object,
    loadEssay: PropTypes.func.isRequired
  };
  
  componentDidMount() {
    const { loadEssay, match } = this.props;
    console.log('we mounted');
    loadEssay(match.params.id);
  }

  handleToggleModal = () => {
    let { showModal } = this.state;
    this.setState({ showModal: !showModal });
  };

  render() { 
    // const { title, photos } = this.props.essay;
    const { selectedPhoto } = this.props;

    return (
      <section>
        {this.props.essay &&
        <div>
          <h2>{this.props.essay.title}</h2>
          <p>{this.props.essay.q1}</p>
          <p>{this.props.essay.q2}</p>
          <p>{this.props.essay.q3}</p>
          <p>{this.props.essay.q4}</p>
          <Photos photos={this.props.essay.photos} toggleModal={this.handleToggleModal}/>
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
                <img src={selectedPhoto.photoUrl}/>
              </Fragment>
            }
          </ReactModal>
        </div>
        }
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