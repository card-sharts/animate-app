import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Preview from './Preview';

class Previews extends PureComponent {
  state = {  }

  static propTypes = {
    previews: PropTypes.array
  };

  render() { 
    const { previews } = this.props;
    return (
      <section>
        <h2>Photo Previews</h2>
        {
          previews.length > 0
            ? previews.map(preview => (
              <Preview
                key={preview.public_id}
                publicId={preview.public_id}
              />
            ))
            : <p>No photos uploaded yet.</p>
        }
      </section>
    );
  }
}
 
export default Previews;