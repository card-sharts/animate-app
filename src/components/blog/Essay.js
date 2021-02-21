import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';
import { connect } from 'react-redux';
import { getSelectedEssay } from './reducers';
import { loadEssay } from './actions';
import Tag from '../form/Tag';
import styles from './essay.css';

class Essay extends PureComponent {

  static propTypes = {
    essay: PropTypes.object,
    match: PropTypes.object,
    loadEssay: PropTypes.func.isRequired
  };
  
  componentDidMount() {
    const { loadEssay, match } = this.props;
    console.log('we mounted');
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

            <Photos photos={essay.photos}/>

            <div>
              <h3>Tags</h3>
              <section className="tags">
                {
                  essay.tags.map(tag => (
                    <Tag key={tag} option={tag} tags={essay.tags}/>
                  ))
                }
              </section>
            </div>

            <div>
              <h3>References</h3>
              <section>
                {
                  essay.references.map(({ category, websiteUrl, instagram }, i) => (
                    <article key={i}>
                      <h5>{category}</h5>
                      {websiteUrl && <a href={websiteUrl}>Website</a>}
                      {instagram && <a href={instagram}>Instagram</a>}
                    </article>
                  ))
                }
              </section>
            </div>

            <div>
              <h3>Photographer</h3>
              <p>placeholder space for photographer headshot and info</p>
            </div>
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