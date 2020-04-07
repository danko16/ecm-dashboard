import React from 'react';
import PropTypes from 'prop-types';

import './inputImage.css';

function InputImage(props) {
  const { onChange, image } = props;
  return (
    <div className="img-container">
      <label className="img-label">
        <input type="file" style={{ display: 'none' }} onChange={onChange} />
        {image ? (
          <img src={image} style={{ width: 150, height: 150, borderRadius: 100 }} alt="Category" />
        ) : (
          'Image'
        )}
      </label>
    </div>
  );
}

InputImage.propTypes = {
  onChange: PropTypes.func,
  image: PropTypes.any
};

export default InputImage;
