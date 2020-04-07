import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { categoryActions } from '../../../redux/reducers/category';
import InputImage from '../../shared/inputImage';
import ResponseMessage from '../../shared/responseMessage';

const mapStateToProps = state => ({
  category: state.category
});

const mapActionToProps = dispatch =>
  bindActionCreators(
    {
      setCategory: categoryActions.setData,
      createCategory: categoryActions.createRequest
    },
    dispatch
  );

function AddCategoryModal(props) {
  const { category, setCategory, createCategory } = props;
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const [image, setImage] = useState('');
  const [error, setError] = useState({
    name: '',
    desc: '',
    image: ''
  });
  const [response, setResponse] = useState({
    message: '',
    isError: false
  });

  useEffect(() => {
    if (!category.loading && category.message) {
      setResponse({ message: category.message, isError: category.isError });
      setCategory('message', '');
    }
  }, [category, setCategory]);

  function handleImageChange(e) {
    setError(state => ({ ...state, image: '' }));
    if (e.target.files && e.target.files[0]) {
      let type = e.target.files[0].type.split('/')[1];
      var isValid = /(jpe?g|png)/i.test(type);

      if (!isValid) {
        return;
      }
      setFile(e.target.files[0]);
      let reader = new FileReader();
      reader.onload = function(e) {
        setImage(e.target.result);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    let isValid = true;
    if (!name) {
      isValid = false;
      setError(state => ({ ...state, name: 'Please enter a category name' }));
    }

    if (!desc) {
      isValid = false;
      setError(state => ({
        ...state,
        desc: 'Please enter a category description'
      }));
    }

    if (!file) {
      isValid = false;
      setError(state => ({
        ...state,
        image: 'Please enter a category image'
      }));
    }

    if (isValid) {
      await createCategory({ name, file, desc });
    }
  }

  return (
    <div
      className="modal fade"
      id="addCategoryModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="addCategoryModalTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bg-primary">
            <h3 className="modal-title">Add Category</h3>
            <button type="button" className="btn btn-tool" data-dismiss="modal">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <form onSubmit={handleOnSubmit} encType="multipart/form-data">
            <div className="modal-body">
              {response.message && (
                <div className="form-group">
                  <ResponseMessage
                    response={response}
                    onDismiss={() => {
                      setResponse({ message: '', isError: false });
                    }}
                  />
                </div>
              )}
              <div className="form-group">
                <InputImage onChange={handleImageChange} image={image} />
              </div>
              <div className="form-group">
                <label htmlFor="categoryName">Name</label>
                <input
                  name="categoryName"
                  className={error.name ? 'form-control is-invalid' : 'form-control'}
                  id="categoryName"
                  placeholder="Enter Name"
                  onClick={() => {
                    setError(state => ({ ...state, name: '' }));
                  }}
                  onChange={e => {
                    setName(e.target.value);
                  }}
                />
                {error.name && (
                  <span id="categoryName-error" className="error invalid-feedback">
                    {error.name}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="categoryDesc">Description</label>
                <textarea
                  className={error.desc ? 'form-control is-invalid' : 'form-control'}
                  id="categoryDesc"
                  rows="3"
                  placeholder="Enter Description"
                  style={{ marginTop: 0, marginBottom: 0, height: 77 }}
                  onClick={() => {
                    setError(state => ({ ...state, desc: '' }));
                  }}
                  onChange={e => {
                    setDesc(e.target.value);
                  }}
                ></textarea>
                {error.desc && (
                  <span id="categoryName-error" className="error invalid-feedback">
                    {error.desc}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="categoryImage">Input Image</label>
                <div className="input-group is-invalid">
                  <div className={error.image ? 'custom-file is-invalid' : 'custom-file'}>
                    <input
                      type="file"
                      className={error.image ? 'custom-file-input is-invalid' : 'custom-file-input'}
                      onChange={handleImageChange}
                      id="categoryImage"
                      onClick={() => {
                        setError(state => ({ ...state, image: '' }));
                      }}
                    />
                    <label className="custom-file-label" htmlFor="categoryImage">
                      {file ? file.name : 'Choose file'}
                    </label>
                  </div>
                </div>
                {error.image && (
                  <span id="categoryName-error" className="error invalid-feedback">
                    {error.image}
                  </span>
                )}
              </div>
            </div>

            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

AddCategoryModal.propTypes = {
  category: PropTypes.object,
  setCategory: PropTypes.func,
  createCategory: PropTypes.func
};

export default connect(mapStateToProps, mapActionToProps)(AddCategoryModal);
