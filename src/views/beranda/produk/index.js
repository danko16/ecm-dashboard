import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ContentHeader from '../components/contentHeader';

const mapStateToProps = state => ({
  categories: state.categories
});

function Produk() {
  return (
    <div className="content">
      <ContentHeader halaman="Produk" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">List produk</h3>
              </div>
              <div className="card-body">
                <div id="example1_wrapper" className="dataTables_wrapper dt-bootstrap4">
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <div className="dataTables_length" id="example1_length">
                        <label>
                          Show{' '}
                          <select
                            name="example1_length"
                            aria-controls="example1"
                            className="custom-select custom-select-sm form-control form-control-sm"
                          >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                          </select>{' '}
                          entries
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div id="example1_filter" className="dataTables_filter">
                        <label>
                          Search:
                          <input
                            type="search"
                            className="form-control form-control-sm"
                            placeholder=""
                            aria-controls="example1"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <table
                        id="example1"
                        className="table table-bordered table-striped dataTable dtr-inline"
                        role="grid"
                        aria-describedby="example1_info"
                      >
                        <thead>
                          <tr role="row">
                            <th className="sorting_asc" tabIndex="0" rowSpan="1" colSpan="1">
                              Nama
                            </th>
                            <th className="sorting" tabIndex="0" rowSpan="1" colSpan="1">
                              Pemilik
                            </th>
                            <th className="sorting" tabIndex="0" rowSpan="1" colSpan="1">
                              Jumlah
                            </th>
                            <th className="sorting" tabIndex="0" rowSpan="1" colSpan="1">
                              Kategori
                            </th>
                            <th className="sorting" tabIndex="0" rowSpan="1" colSpan="1">
                              Harga
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row" className="odd">
                            <td tabIndex="0" className="sorting_1">
                              Air Lemon
                            </td>
                            <td>Dan Group</td>
                            <td>123</td>
                            <td>Minuman</td>
                            <td>Rp 12.000</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th rowSpan="1" colSpan="1">
                              Nama
                            </th>
                            <th rowSpan="1" colSpan="1">
                              Pemilik
                            </th>
                            <th rowSpan="1" colSpan="1">
                              Jumlah
                            </th>
                            <th rowSpan="1" colSpan="1">
                              Kategori
                            </th>
                            <th rowSpan="1" colSpan="1">
                              Harga
                            </th>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <div
                        className="dataTables_info"
                        id="example1_info"
                        role="status"
                        aria-live="polite"
                      >
                        Menampilkan 10 dari 57 produk
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <div
                        className="dataTables_paginate paging_simple_numbers"
                        id="example1_paginate"
                      >
                        <ul className="pagination">
                          <li
                            className="paginate_button page-item previous disabled"
                            id="example1_previous"
                          >
                            <a
                              href="/"
                              aria-controls="example1"
                              data-dt-idx="0"
                              tabIndex="0"
                              className="page-link"
                            >
                              Previous
                            </a>
                          </li>
                          <li className="paginate_button page-item active">
                            <a
                              href="/"
                              aria-controls="example1"
                              data-dt-idx="1"
                              tabIndex="0"
                              className="page-link"
                            >
                              1
                            </a>
                          </li>
                          <li className="paginate_button page-item ">
                            <a
                              href="/"
                              aria-controls="example1"
                              data-dt-idx="2"
                              tabIndex="0"
                              className="page-link"
                            >
                              2
                            </a>
                          </li>
                          <li className="paginate_button page-item ">
                            <a
                              href="/"
                              aria-controls="example1"
                              data-dt-idx="3"
                              tabIndex="0"
                              className="page-link"
                            >
                              3
                            </a>
                          </li>
                          <li className="paginate_button page-item ">
                            <a
                              href="/"
                              aria-controls="example1"
                              data-dt-idx="4"
                              tabIndex="0"
                              className="page-link"
                            >
                              4
                            </a>
                          </li>
                          <li className="paginate_button page-item ">
                            <a
                              href="/"
                              aria-controls="example1"
                              data-dt-idx="5"
                              tabIndex="0"
                              className="page-link"
                            >
                              5
                            </a>
                          </li>
                          <li className="paginate_button page-item ">
                            <a
                              href="/"
                              aria-controls="example1"
                              data-dt-idx="6"
                              tabIndex="0"
                              className="page-link"
                            >
                              6
                            </a>
                          </li>
                          <li className="paginate_button page-item next" id="example1_next">
                            <a
                              href="/"
                              aria-controls="example1"
                              data-dt-idx="7"
                              tabIndex="0"
                              className="page-link"
                            >
                              Next
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Produk.propTypes = {
  openSidebar: PropTypes.bool,
  categories: PropTypes.object
};

export default connect(mapStateToProps)(Produk);
