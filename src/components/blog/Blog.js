import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Essays from './Essays';

class Blog extends PureComponent {
  state = {  }
  render() { 
    return (
      <section>
        <Essays/>
      </section>
    );
  }
}
 
export default Blog;