import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import decode from 'jwt-decode';
import PropTypes from 'prop-types';

import { history } from './redux';
import { Login, Home } from './views';

const mapStateToProps = state => ({
  me: state.me
});

function App(props) {
  const { me } = props;

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
