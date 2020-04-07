import React from 'react';

import ContentHeader from '../components/contentHeader';
import AddCategoryModal from '../components/addCategoryModal';
import './kategori.css';

function Kategori() {
  return (
    <div className="content">
      <ContentHeader halaman="Kategori" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <button
              type="button"
              className="btn btn-primary ml-2"
              data-toggle="modal"
              data-target="#addCategoryModal"
              style={{ lineHeight: 2 }}
            >
              Tambah Kategori
            </button>
          </div>
          <form className="col-md-6 input-group-append d-flex justify-content-end example">
            <input type="text" placeholder="Cari.." />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>

      <AddCategoryModal />
    </div>
  );
}

export default Kategori;
