import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';
import { connect } from 'react-redux';
import { getSelectedEssay } from './reducers';
import { loadEssay } from './actions';

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
          <section>
            <h2>{essay.title}</h2>
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