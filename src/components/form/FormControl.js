import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './FormControl.css';

class FormControl extends PureComponent {

  static propTypes = {
    children: PropTypes.element,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    name: PropTypes.string
  };

  render() {
    const { name, value, children, onChange } = this.props;
    
    return (
      <section className={styles.formControl}>
        <li className="control">
          {children}
          <textarea name={name} value={value} onChange={onChange} rows="4" cols="70"/>
        </li>
      </section>
    );
  }
}

export default FormControl;

