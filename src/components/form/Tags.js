import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Tags extends PureComponent {
  state = {
    options: ['black and white', 'Jewish', 'Christian', 'same sex'], 
  };

  static propTypes = {
    tags: PropTypes.array.isRequired
  };

  render() { 
    const { options } = this.state;

    return (
      <div>
        <ul>
          
          {
            options.map(option => (
              <li key={option}>{option}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}
 
export default Tags;