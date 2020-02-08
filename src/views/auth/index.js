import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { meActions } from '../../redux/reducers/me';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login: meActions.loginRequest
    },
    dispatch
  );

function Auth(props) {
  const { login } = props;

  const [emailPhone, setEmailPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div
      style={{
        display: 'flex',
        height: 625,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          display: 'flex',
          height: 450,
          width: 850,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#cfcfcf',
          borderRadius: 6
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 600,
            flexDirection: 'column'
          }}
        >
          <input
            placeholder="Email/phone"
            onChange={e => {
              setEmailPhone(e.target.value);
            }}
            style={{
              height: 45,
              marginBottom: 30,
              paddingLeft: 10,
              paddingRight: 10,
              fontSize: 16,
              borderStyle: 'solid',
              border: 'none',
              borderRadius: 4
            }}
            value={emailPhone}
          />
          <input
            placeholder="Password"
            type="password"
            onChange={e => {
              setPassword(e.target.value);
            }}
            style={{
              marginBottom: 45,
              height: 45,
              paddingLeft: 10,
              paddingRight: 10,
              fontSize: 16,
              borderStyle: 'solid',
              border: 'none',
              borderRadius: 4
            }}
            value={password}
          />
          <input
            style={{
              height: 45,
              borderStyle: 'solid',
              border: 'none',
              borderRadius: 4,
              color: 'white',
              fontSize: 16,
              backgroundColor: '#498de6',
              cursor: 'pointer'
            }}
            onClick={() => {
              login({
                email_phone: emailPhone,
                password: password,
                provider: 'local'
              });
            }}
            value="LOGIN"
            type="submit"
          />
        </div>
      </div>
    </div>
  );
}

Auth.propTypes = {
  login: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Auth);
