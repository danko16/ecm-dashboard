import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './responseMessage.css';

function ResponseMessage(props) {
  const {
    response: { message, isError },
    onDismiss
  } = props;
  return (
    <div
      className={classNames('d-flex mb-4 justify-content-center', {
        'bg-success': !isError,
        'bg-gradient-danger': isError
      })}
      style={{ borderRadius: 4, position: 'relative', color: 'white', padding: 16 }}
    >
      <p className="m-0">{message}</p>
      <button type="button" className="btn btn-tool" onClick={onDismiss}>
        <i className="right fas fa-times"></i>
      </button>
    </div>
  );
}

ResponseMessage.propTypes = {
  response: PropTypes.object,
  onDismiss: PropTypes.func
};

export default ResponseMessage;
