import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Uploader from './Uploader';
import Previews from './Previews';
import { onPhotosUpload } from './actions';
import { getPreviews } from './reducers';
import FormControl from './FormControl';
import ReferencesForm from './ReferencesForm';
import { submitEssay } from '../../services/api';
import styles from './Form.css';


class Form extends PureComponent {
  state = {
    title: '',
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    bangerUrl: 'test',
    photos: [],
    references: []
  };

  static propTypes = {
    previews: PropTypes.array,
    onPhotosUpload: PropTypes.func
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { previews } = this.props;
    submitEssay({
      ...this.state,
      photos: previews
    });
  };

  addReference = reference => {
    this.setState(({ references }) => ({ references: [...references, reference] }));
  };

  render() { 
    const { previews, onPhotosUpload } = this.props;
    const { title, references } = this.state;

    const questions = [
      'What is your philosophy or approach to wedding photography?',
      'What is the context of this wedding? i.e. couples story, wedding day story, etc.',
      'What was your biggest challenge as a photographer on this wedding day?',
      'What was your greatest success on this wedding day?'
    ];
    
    return (
      <section className={styles.form}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
            <input name='title' value={title} onChange={this.handleChange}/>
          </div>
          <div>
            <h2>Questions</h2>
            <ol>
              {
                questions.map((question, i) => (
                  <FormControl name={'q' + (i + 1)} value={this.state['q' + (i + 1)]} onChange={this.handleChange} key={i}>
                    <p>{question}</p>
                  </FormControl>
                ))
              }
            </ol>
          </div>
          <div>
            <h2>References</h2>
            <ReferencesForm addReference={this.addReference}/>
            
            {
              references.map(ref => (
                <li key={ref.type}>
                  <p>{ref.type}</p>
                  {ref.website && <p>Website: {ref.website}</p>}
                  {ref.instagram && <p>Instagram: {ref.instagram}</p>}
                </li>
              ))
            }
          </div>
          <button>Submit</button>
        </form>
        <section>
          <Uploader onPhotosUpload={onPhotosUpload}/>
          <Previews previews={previews}/>
        </section>
      </section>
      
    );
  }
}
 
export default connect(
  state => ({
    previews: getPreviews(state)
  }),
  { onPhotosUpload }
)(Form);

