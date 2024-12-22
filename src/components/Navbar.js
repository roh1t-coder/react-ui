import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">IMS-Connect</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Ideas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/submit">Submit Idea</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/votes">Votes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/collaborations">Collaborations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rewards">Rewards</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;