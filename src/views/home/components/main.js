import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { categoryActions } from '../../../redux/reducers/category';

const mapActionToProps = dispatch =>
  bindActionCreators(
    {
      createCategory: categoryActions.createRequest
    },
    dispatch
  );

function Main(props) {
  const { createCategory } = props;
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);
  const [image, setImage] = useState('');

  return (
    <div
      style={{
        position: 'absolute',
        marginTop: 50,
        marginLeft: 240,
        height: 525,
        width: 1076,
        padding: 25,
        overflow: 'auto'
      }}
    >
      <form
        onSubmit={async e => {
          e.preventDefault();
          createCategory({ name, file });
        }}
        encType="multipart/form-data"
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ebebeb',
          borderRadius: 4,
          height: 250,
          width: 350,
          padding: 20
        }}
      >
        <label
          style={{
            alignSelf: 'center',
            borderWidth: 1,
            backgroundColor: '#ffffff',
            borderStyle: 'solid',
            borderColor: '#ccc',
            display: 'flex',
            padding: 12,
            borderRadius: 100,
            width: 75,
            height: 75,
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 25
          }}
        >
          <input
            type="file"
            style={{ display: 'none' }}
            onChange={e => {
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
            }}
          />
          {image ? (
            <img
              id="blah"
              src={image}
              style={{ width: 100, height: 100, borderRadius: 100 }}
              alt="Category"
            />
          ) : (
            'Image'
          )}
        </label>
        <input
          placeholder="Add Category"
          onChange={e => {
            setName(e.target.value);
          }}
          value={name}
          style={{
            borderStyle: 'solid',
            border: 'none',
            borderRadius: 4,
            marginBottom: 25,
            height: 40,
            paddingLeft: 10,
            paddingRight: 10
          }}
        />
        <input
          type="submit"
          value="ADD"
          style={{
            borderStyle: 'solid',
            border: 'none',
            width: '100%',
            borderRadius: 4,
            height: 40,
            paddingLeft: 10,
            paddingRight: 10,
            color: 'white',
            cursor: 'pointer',
            backgroundColor: '#498de6'
          }}
        />
      </form>
    </div>
  );
}

Main.propTypes = {
  createCategory: PropTypes.func
};

export default connect(null, mapActionToProps)(Main);
