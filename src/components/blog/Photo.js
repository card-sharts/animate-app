import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Photo.css';
import { connect } from 'react-redux';
import { setModalPhoto } from './actions';

class Photo extends PureComponent {
  static propTypes = {
    photo: PropTypes.object.isRequired,
    toggleModal: PropTypes.func.isRequired,
    setModalPhoto: PropTypes.func.isRequired
  };

  handleModal = () => {
    const { toggleModal, photo, setModalPhoto } = this.props;
    setModalPhoto(photo);
    toggleModal();
  };

  render() { 
    const { photoUrl, caption, tags  } = this.props.photo;

    return (
      <div className={styles.photo} onClick={this.handleModal}>
        <img src={photoUrl}/>
      </div>
    );
  }
}
 
export default connect(
  null,
  { setModalPhoto }
)(Photo);