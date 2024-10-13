import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

export function Navbar() {
  const [fadeButtonOne, setFadeButtonOne] = useState(false);
  const [fadeButtonTwo, setFadeButtonTwo] = useState(false);
  const [fadeButtonThree, setFadeButtonThree] = useState(false);

  return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'transparent' }}>
            <div className="container-fluid">
              <a className="navbar-brand" href="#" style={{ color: 'black' }}>G-Connect</a>

              <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className={`nav-link ${fadeButtonOne ? 'fade-out' : ''}`} href="#" onClick={() => setFadeButtonOne(true)} style={{ backgroundColor: 'transparent', color: 'black' }}>
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className={`nav-link ${fadeButtonTwo ? 'fade-out' : ''}`} href="#" onClick={() => setFadeButtonTwo(true)} style={{ backgroundColor: 'transparent', color: 'black' }}>
                      Discover
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className={`nav-link ${fadeButtonThree ? 'fade-out' : ''}`} href="#" onClick={() => setFadeButtonThree(true)} style={{ backgroundColor: 'transparent', color: 'black' }}>
                      Profile
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div>
            <img src="/images/bro.jpg" alt="Bro" />
          </div>
        </div>
  );
}