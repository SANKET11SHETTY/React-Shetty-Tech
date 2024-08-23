import React from 'react';
import { Link } from 'react-router-dom';


const Navbar2 = () => {
  return (
    <>
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid ">
              <a className="navbar-brand ps-3" href="#">
                <img src="/ImagesHome/logo1.png" alt=""/>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav px-3 navlinks1  ">
                  <li className="nav-item px-3 ">
                    <Link className="nav-link active" to="/">Home</Link>
                  </li>
                  <li className="nav-item px-3 ">
                    <Link className="nav-link" to="/service">Service</Link>
                  </li>
                  <li className="nav-item px-3">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                  
                  <li className="nav-item px-3">
                    <Link className="nav-link" to="/contactus">Contact Us</Link>
                  </li>
                </ul>
                <div className="moders">

                  <button title="Change Theme" className="darkmoding"><svg  xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#e8eaed"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#e8eaed"><path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"/></svg></button>
                </div>
              </div>
            
           
            </div>
          </nav>
          <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
    </>
  )
}

export default Navbar2