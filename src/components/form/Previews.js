import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Preview from './Preview';

class Previews extends PureComponent {
  state = {
  };

  static propTypes = {
    previews: PropTypes.array,
    onClick: PropTypes.func.isRequired
  };

  render() { 
    const { previews, onClick } = this.props;
    return (
      <section>
        <h2>Photo Previews</h2>
        {
          previews.length > 0
            ? previews.map(preview => (
              <Preview
                key={preview.publicId}
                onClick={onClick}
                publicId={preview.publicId}
              />
            ))
            : <p>No photos uploaded yet.</p>
        }
      </section>
    );
  }
}
 
export default Previews;