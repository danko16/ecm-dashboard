import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Produk from './produk';
import Kategori from './kategori';
import './beranda.css';

const mapStateToProps = state => ({
  categories: state.categories
});

const openedStyle = {
  marginLeft: 250,
  transition: 'margin-left 0.5s ease-in-out'
};

const closedStyle = {
  marginLeft: '4.6rem',
  transition: 'margin-left 0.5s ease-in-out'
};

function Main(props) {
  const { openSidebar } = props;

  return (
    <div className="content-wrapper" style={openSidebar ? openedStyle : closedStyle}>
      <Switch>
        <Route path="/beranda/produk">
          <Produk />
        </Route>
        <Route path="/beranda/kategori">
          <Kategori />
        </Route>
      </Switch>
    </div>
  );
}

Main.propTypes = {
  openSidebar: PropTypes.bool,
  categories: PropTypes.object
};

export default connect(mapStateToProps)(Main);
