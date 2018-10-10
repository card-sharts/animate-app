import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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

  handleAdd = () => {
    return this.props.addReference(this.state)
      .then(() => this.setState({ type: '', website: '', instagram: '' }));
    
  };

  render() { 
    const { website, instagram } = this.state;
    const referenceType = ['Venue', 'Planner/coordinator', 'Florist', 'Caterer', 'DJ', 'Entertainment', 'Hair', 'Makeup', 'Officiant', 'Other'];

    return (
      <div>
        <select name="type" onChange={this.handleChange}>
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
