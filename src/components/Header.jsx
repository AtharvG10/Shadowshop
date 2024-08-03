import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        {/* Brand/logo with space */}
        <a className="navbar-brand" href="#" style={{ marginLeft: '10px' }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfb8M2hlgEXEt7Ge46uQIsAePeab7gWDJxFw&usqp=CAU" alt="logo" style={{ width: '40px' }} />
        </a>

        {/* Links */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link" style={{ textDecoration: 'none', color: 'white', marginLeft: '20px' }}>
              <h3>Shadowshop</h3>
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/recents"} className="nav-link" href="#" style={{ marginLeft: '20px', color: 'white' }}>Recents</Link>
          </li>
          <li className="nav-item">
            <Link to={"/about"} className="nav-link" href="#" style={{ marginLeft: '20px', color: 'white' }}>About</Link>
          </li>
          <li className="nav-item">
            <Link to={"/gallery"} className="nav-link" href="#" style={{ marginLeft: '20px', color: 'white' }}>Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to={"contact"} className="nav-link" href="#" style={{ marginLeft: '20px', color: 'white' }}>Contact</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ marginLeft: '20px', color: 'white' }}>Help</a>
          </li>
          <li className="nav-item">
            <Link to="/admin" className="nav-link" style={{ textDecoration: 'none', color: 'white', marginLeft: '20px' }}>
              Admin
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
