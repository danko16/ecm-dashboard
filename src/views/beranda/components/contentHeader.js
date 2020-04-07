import React from 'react';
import PropTypes from 'prop-types';

function ContentHeader(props) {
  const { halaman } = props;
  return (
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">{halaman}</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="/">Beranda</a>
              </li>
              <li className="breadcrumb-item active">{halaman}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

ContentHeader.propTypes = {
  halaman: PropTypes.string
};

export default ContentHeader;
