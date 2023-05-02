/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/navbar.css';

const Navbar = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light bg-light">
      <a className="navbar-brand" href="#">Back</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Countries</a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fas fa-microphone" /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fas fa-cog" /></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Navbar;
