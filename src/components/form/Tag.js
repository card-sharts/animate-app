import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Tag extends PureComponent {
  state = {  };

  static propTypes = {
    tags: PropTypes.array.isRequired,
    option: PropTypes.string.isRequired,
    handleSelect: PropTypes.func
  };

  handleClick = () => {
    const { option, handleSelect } = this.props;
    if(handleSelect) handleSelect(option);
  };

  render() { 
    const { option, tags } = this.props;
    return (
      <li
        onClick={this.handleClick}
        className={tags.includes(option) ? 'selected' : ''}
      >
        {this.props.option}
      </li>
    );
  }
}
 
export default Tag;