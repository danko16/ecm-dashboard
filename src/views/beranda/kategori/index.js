import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ContentHeader from '../components/contentHeader';
import AddCategoryModal from '../components/addCategoryModal';
import { categoryActions } from '../../../redux/reducers/category';
import './kategori.css';

const mapStateToProps = state => ({
  kategori: state.category
});

const mapActionToProps = dispatch =>
  bindActionCreators(
    {
      getCategories: categoryActions.getRequest,
      deleteCategories: categoryActions.deleteRequest
    },
    dispatch
  );

function Kategori(props) {
  const { kategori, getCategories, deleteCategories } = props;

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  function renderCategories() {
    return kategori.data.map(val => (
      <div className="col-md-3" key={val.id}>
        <div className="card card-widget widget-user">
          <div className="widget-user-header bg-info">
            <button
              type="button"
              className="btn btn-tool"
              data-dismiss="modal"
              onClick={() => {
                deleteCategories(val.id);
              }}
              style={{ position: 'absolute', right: 20 }}
            >
              <i className="fas fa-times"></i>
            </button>
            <h5 className="widget-user-desc mt-2">{val.name}</h5>
          </div>
          <div className="widget-user-image">
            <img className="img-circle elevation-2" src={val.image} alt="User Avatar" />
          </div>
          <div className="card-footer">
            <div className="row">
              <div className="col-sm-4 border-right">
                <div className="description-block">
                  <h5 className="description-header">3,200</h5>
                  <span className="description-text">SALES</span>
                </div>
              </div>
              <div className="col-sm-4 border-right">
                <div className="description-block">
                  <h5 className="description-header">13,000</h5>
                  <span className="description-text">VIEWED</span>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="description-block">
                  <h5 className="description-header">35</h5>
                  <span className="description-text">PRODUCTS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }
  return (
    <div className="content">
      <ContentHeader halaman="Kategori" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <button
              type="button"
              className="btn btn-primary"
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

        <div className="row mt-4">{!kategori.loading && renderCategories()}</div>
      </div>

      <AddCategoryModal />
    </div>
  );
}

Kategori.propTypes = {
  kategori: PropTypes.object,
  getCategories: PropTypes.func
};

export default connect(mapStateToProps, mapActionToProps)(Kategori);
