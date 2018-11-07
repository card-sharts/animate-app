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
import { Image, Transformation } from 'cloudinary-react';
import styles from './Form.css';


class Form extends PureComponent {
  state = {
    title: '',
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    featuredPhotoUrl: null,
    photos: [],
    references: [],
    tags: []
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

  selectFeatured = featuredPhotoUrl => {
    this.setState({ featuredPhotoUrl });
  };

  render() { 
    const { previews, onPhotosUpload } = this.props;
    const { title, references, featuredPhotoUrl } = this.state;

    const questions = [
      'What is your philosophy or approach to wedding photography?',
      'What is the context of this wedding? i.e. couples story, wedding day story, etc.',
      'What was your biggest challenge as a photographer on this wedding day?',
      'What was your greatest success on this wedding day?'
    ];
    
    return (
      <section className={styles.form}>
        <form onSubmit={this.handleSubmit}>
          <h1>Photo Essay Submission Form</h1>
          
          <div>
            <label>
              <span>Cover Photo:</span>
              {featuredPhotoUrl
                ? <Image
                  cloudName="animate"
                  publicId={featuredPhotoUrl}
                  className="thumbnail inline"
                  height="200"
                  crop="scale"
                  quality="100"
                >
                  <Transformation quality="auto" fetchFormat="auto" />
                </Image>
                : <span> Select a photo from previews.</span>
              }
            </label>
            <label>
              <span>Title:</span>
              <input name='title' value={title} onChange={this.handleChange}/>
            </label>
          </div>

          <div>
            <h2>Questionnaire</h2>
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
              references.map(({ type, website, instagram }) => (
                <li key={type}>
                  <p>{type}</p>
                  {website && <p>Website: {website}</p>}
                  {instagram && <p>Instagram: {instagram}</p>}
                </li>
              ))
            }
          </div>

          <button type="submit">Submit</button>
        </form>


        <section>
          <Uploader onPhotosUpload={onPhotosUpload}/>
          <Previews onClick={this.selectFeatured} previews={previews}/>
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

