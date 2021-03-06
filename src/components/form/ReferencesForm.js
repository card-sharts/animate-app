import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './ReferencesForm.css';

class ReferencesForm extends PureComponent {
  state = {
    type: '',
    website: '',
    instagram: ''
  };

  static propTypes = {
    addReference: PropTypes.func.isRequired
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleAdd = event => {
    event.preventDefault();
    const { type, website, instagram } = this.state;
    if(type && (website || instagram)) {
      this.props.addReference(this.state);
      this.setState({ type: '', website: '', instagram: '' });
    }
    else console.log('need a type or website or instagram');
  };

  render() { 
    const { type, website, instagram } = this.state;
    const referenceType = [
      'Venue',
      'Planner/coordinator',
      'Florist', 'Caterer',
      'DJ',
      'Entertainment',
      'Hair',
      'Makeup',
      'Officiant',
      'Other'
    ];

    return (
      <div className={styles.referencesForm}>
        <select name="type" value={type} onChange={this.handleChange}>
          <option disabled value=""></option>
          {
            referenceType.map((type, i) => (
              <option key={i} value={type}>{type}</option>
            ))
          }
        </select>
        <InputControl name="website" value={website} onChange={this.handleChange}/>
        <InputControl name="instagram" value={instagram} onChange={this.handleChange}/>
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}
 
export default ReferencesForm;



const InputControl = (props) => (
  <p>
    <label>
      {props.name}:
      <input {...props}/>
    </label>
  </p>
);
