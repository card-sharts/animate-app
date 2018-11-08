import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';
import { connect } from 'react-redux';
import { getSelectedEssay } from './reducers';
import { loadEssay } from './actions';
import styles from './essay.css';

class Essay extends PureComponent {

  static propTypes = {
    essay: PropTypes.object,
    match: PropTypes.object,
    loadEssay: PropTypes.func.isRequired
  };
  
  componentDidMount() {
    const { loadEssay, match } = this.props;
    loadEssay(match.params.id);
  }

  render() { 
    const { essay } = this.props;

    return (
      <Fragment>
        {essay && 
          <section className={styles.essay}>
            <header>
              <h1>{essay.title}</h1>
            </header>

            <div>
              <p>{essay.q1}</p>
              <p>{essay.q2}</p>
              <p>{essay.q3}</p>
              <p>{essay.q4}</p>
            </div>

            <div>
              <p>Tags</p>
            </div>

            <Photos photos={essay.photos}/>
          </section>
        }
      </Fragment>
    );
  }
}
 
export default connect(
  (state) => ({
    essay: getSelectedEssay(state)
  }),
  { loadEssay }
)(Essay);