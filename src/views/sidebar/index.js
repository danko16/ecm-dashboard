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

const openedTree = {
  display: 'block',
  maxHeight: 200,
  opacity: 1,
  transition: 'max-height 0.4s ease-in-out, opacity .4s ease'
};

const closedTree = {
  display: 'block',
  opacity: 0,
  maxHeight: 0,
  transition: 'max-height 0.4s ease-in-out, opacity .4s ease'
};

const openedTreeIcon = {
  transform: 'rotate(-90deg)',
  transition: 'transform ease-in-out .3s,-webkit-transform ease-in-out .3s'
};

const closedTreeIcon = {
  transition: 'transform ease-in-out .3s,-webkit-transform ease-in-out .3s'
};

function Sidebar(props) {
  const { openSidebar } = props;
  const [activeSidebar, setActiveSideBar] = useState('beranda');
  const [activeberanda, setActiveberanda] = useState('produk');
  const [openTree, setOpenTree] = useState({ beranda: false, widget: false });
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
              <div
                className={classNames('d-flex nav-link align-items-center', {
                  active: activeSidebar === 'beranda' ? true : false
                })}
                onClick={() => {
                  setOpenTree(state => ({ ...state, beranda: !state.beranda }));
                }}
              >
                <i className="nav-icon fas fa-tachometer-alt py-1"></i>
                <p className="m-0 ml-2 p-0" style={openSidebar ? null : closedNavlink}>
                  <span className="text-nowrap">Beranda</span>
                  <i
                    className="right fas fa-angle-left"
                    style={openTree.beranda ? openedTreeIcon : closedTreeIcon}
                  ></i>
                </p>
              </div>
              <ul className="nav nav-treeview" style={openTree.beranda ? openedTree : closedTree}>
                <li className="nav-item">
                  <Link
                    to="/beranda/produk"
                    className={classNames('nav-link d-flex align-items-center', {
                      active:
                        activeSidebar === 'beranda' && activeberanda === 'produk' ? true : false
                    })}
                    onClick={() => {
                      setActiveSideBar('beranda');
                      setActiveberanda('produk');
                    }}
                  >
                    <i className="far fa-circle nav-icon py-1"></i>
                    <p className="m-0 ml-2 p-0" style={openSidebar ? null : closedNavlink}>
                      <span className="text-nowrap">Produk</span>
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/beranda/kategori"
                    className={classNames('nav-link d-flex align-items-center', {
                      active:
                        activeSidebar === 'beranda' && activeberanda === 'kategori' ? true : false
                    })}
                    onClick={() => {
                      setActiveSideBar('beranda');
                      setActiveberanda('kategori');
                    }}
                  >
                    <i className="far fa-circle nav-icon py-1"></i>
                    <p className="m-0 ml-2 p-0" style={openSidebar ? null : closedNavlink}>
                      <span className="text-nowrap">Kategori</span>
                    </p>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                to="/beranda/widget"
                className={classNames('d-flex nav-link align-items-center', {
                  active: activeSidebar === 'widget' ? true : false
                })}
                onClick={() => {
                  setActiveSideBar('widget');
                }}
              >
                <i className="nav-icon fas fa-th py-1"></i>
                <p className="m-0 ml-2 p-0" style={openSidebar ? null : closedNavlink}>
                  Widgets
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
