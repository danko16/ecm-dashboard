import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { meActions } from '../redux/reducers/me';
import './auth.css';

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

  function handleOnSubmit(e) {
    e.preventDefault();
    login({
      email_phone: emailPhone,
      password: password,
      provider: 'local'
    });
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Admin</b>LTE
          </a>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <form onSubmit={handleOnSubmit}>
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  placeholder="Email/phone"
                  onChange={e => {
                    setEmailPhone(e.target.value);
                  }}
                  value={emailPhone}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
              </div>
            </form>

            <div className="social-auth-links text-center mb-4">
              <p>- OR -</p>
              <button className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
              </button>
              <button className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
              </button>
            </div>

            <div className="row">
              <p className="col-md-6 mb-1">
                <a href="forgot-password.html">Forgot password</a>
              </p>
              <p className="col-md-6 d-flex justify-content-end mb-0">
                <a href="register.html" className="text-center">
                  Register Here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Auth.propTypes = {
  login: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Auth);
