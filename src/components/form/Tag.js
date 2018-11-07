import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Tag.css';

class Tag extends PureComponent {
  state = {  };

  static propTypes = {
    tags: PropTypes.array.isRequired,
    option: PropTypes.string.isRequired,
    handleSelect: PropTypes.func.isRequired
  };

  handleClick = () => {
    const { option, handleSelect } = this.props;
    handleSelect(option);
  };

  render() { 
    return (
      <li onClick={this.handleClick} className={styles.tag}>
        {this.props.option}
      </li>
    );
  }
}
 
export default Tag;