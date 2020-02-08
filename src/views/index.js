import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import decode from 'jwt-decode';
import PropTypes from 'prop-types';

import Auth from './auth';
import Home from './home';

const mapStateToProps = state => ({
  me: state.me
});

function RootViews(props) {
  const { me } = props;

  const isAuthenticated = () => {
    const token = me.access_token;
    const refreshToken = me.refresh_token;
    try {
      decode(token);
      decode(refreshToken);
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
      <div className="RootViews">
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <Route path="/login">
            <Auth />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

RootViews.propTypes = {
  me: PropTypes.object
};

export default connect(mapStateToProps)(RootViews);
