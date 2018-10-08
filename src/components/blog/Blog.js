import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Essays from './Essays';

class Blog extends PureComponent {
  state = {  }
  render() { 
    return (
      <section>
        <h2>Blog</h2>
        <Essays/>
      </section>
    );
  }
}
 
export default Blog;