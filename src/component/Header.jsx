import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark p-3 shadow-sm text-white">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <h6 className="h3 m-0">TODO APP</h6>
        </div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              Home
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
