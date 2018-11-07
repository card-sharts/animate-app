import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';
import styles from './Tags.css';

class Tags extends PureComponent {
  state = {
    options: ['black and white', 'Jewish', 'Christian', 'same sex'], 
  };

  static propTypes = {
    tags: PropTypes.array.isRequired,
    handleSelect: PropTypes.func.isRequired
  };

  render() { 
    const { options } = this.state;
    const { tags, handleSelect } = this.props;

    return (
      <div className={styles.tags}>
        <ul>
          {
            options.map(option => (
              <Tag
                tags={tags}
                key={option}
                option={option}
                handleSelect={handleSelect}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}
 
export default Tags;