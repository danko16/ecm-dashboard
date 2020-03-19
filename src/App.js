import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import decode from 'jwt-decode';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

import { history, store } from './redux';
import { Login, Home } from './views';
import { meActions } from './redux/reducers/me';
import { Api } from './utils';

Api.interceptors.request.use(
  function(config) {
    const { me } = store.getState();
    const token = me.access_token;
    const refreshToken = me.refresh_token;
    const clientId = me.client_id;
    const provider = me.provider;

    if (token && refreshToken && clientId && provider) {
      config.headers['x-token'] = `Admin ${token}`;
      config.headers['x-refresh-token'] = `Admin ${refreshToken}`;
      config.headers['x-client-id'] = clientId;
      config.headers['x-provider'] = provider;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  function(config) {
    const token = config.headers['x-token'];
    const refreshToken = config.headers['x-refresh-token'];
    if (token && refreshToken) {
      store.dispatch(meActions.customSet('access_token', token));
      store.dispatch(meActions.customSet('refresh_token', refreshToken));
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

const mapStateToProps = state => ({
  me: state.me
});

function App(props) {
  const { me } = props;

  useEffect(() => {
    store.dispatch(meActions.infoRequest());
  }, []);

  const isAuthenticated = () => {
    const token = me.access_token;
    const refreshToken = me.refresh_token;
    const now = new Date().getTime() / 1000;
    try {
      decode(token);
      const parseRefreshToken = decode(refreshToken);

      if (now > parseRefreshToken.exp) {
        throw new Error('Token Expired');
      }
    } catch (err) {
      return false;
    }
    return true;
  };

  //eslint-disable-next-line
  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isAuthenticated() ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  return (
    <Router>
      <ConnectedRouter history={history}>
        <div className="App">
          <Switch>
            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </ConnectedRouter>
    </Router>
  );
}

App.propTypes = {
  me: PropTypes.object
};

export default connect(mapStateToProps)(App);
