import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './sidebar.css';

const openedStyle = {
  width: 250,
  transition: 'width 0.5s ease-in-out'
};

const closedStyle = {
  width: '4.6rem',
  transition: 'width 0.5s ease-in-out'
};

const openedText = {
  transition: 'margin-left .3s linear,opacity .3s ease,visibility .3s ease'
};

const closedText = {
  marginLeft: -10,
  opacity: 0,
  visibility: 'hidden',
  transition: 'margin-left .3s linear,opacity .3s ease,visibility .3s ease'
};

const closedNavlink = {
  opacity: 0,
  display: 'none',
  transition: 'margin-left 3s linear,opacity .3s ease,visibility .3s ease'
};

function Sidebar(props) {
  const { openSidebar } = props;
  const [activeSidebar, setActiveSideBar] = useState('beranda');
  return (
    <div
      className="main-sidebar sidebar-dark-primary elevation-4"
      style={openSidebar ? openedStyle : closedStyle}
    >
      <div className="brand-link">
        <img
          src="dist/img/AdminLTELogo.png"
          alt="L"
          className="brand-image img-circle elevation-3"
          style={{
            opacity: 0.8
          }}
        />
        <span
          className="brand-text font-weight-light"
          style={openSidebar ? openedText : closedText}
        >
          AdminLTE 3
        </span>
      </div>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="U" />
          </div>
          <div className="info" style={openSidebar ? openedText : closedText}>
            <a href="/" className="d-block">
              Alexander Pierce
            </a>
          </div>
        </div>
        <nav className="mt-2">
          <ul className="nav has-treeview nav-pills nav-sidebar flex-column">
            <li className="nav-item">
              <Link
                to="/beranda"
                className={classNames('d-flex nav-link align-items-center', {
                  active: activeSidebar === 'beranda'
                })}
                onClick={() => {
                  setActiveSideBar('beranda');
                }}
              >
                <i className="nav-icon fas fa-tachometer-alt py-1"></i>
                <p className="m-0 ml-2 p-0" style={openSidebar ? null : closedNavlink}>
                  <span className="text-nowrap">Beranda</span>
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/beranda/produk"
                className={classNames('nav-link d-flex align-items-center', {
                  active: activeSidebar === 'produk'
                })}
                onClick={() => {
                  setActiveSideBar('produk');
                }}
              >
                <i className="nav-icon fas fa-tree"></i>
                <p className="m-0 ml-2 p-0" style={openSidebar ? null : closedNavlink}>
                  <span className="text-nowrap">Produk</span>
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/beranda/kategori"
                className={classNames('nav-link d-flex align-items-center', {
                  active: activeSidebar === 'kategori'
                })}
                onClick={() => {
                  setActiveSideBar('kategori');
                }}
              >
                <i className="nav-icon fas fa-th py-1"></i>
                <p className="m-0 ml-2 p-0" style={openSidebar ? null : closedNavlink}>
                  <span className="text-nowrap">Kategori</span>
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  openSidebar: PropTypes.bool
};

export default Sidebar;
