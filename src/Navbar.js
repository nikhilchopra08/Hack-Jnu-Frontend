import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Componets/logo.jpeg';

const Navbar = () => {
  const accessToken = localStorage.getItem('accessToken')

  if(!accessToken){
  return (
    <nav className='BHenKALoda'>
      <div className='HEader'>
        <Link to="/">
          <img src={logo} className='logo' alt='logo'/>
        </Link>
        <button type="button">
          <span></span>
        </button>
        <div className='flex-1'>
          <ul className='bhai-sath-aaja'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/booking">Booking</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            {/* <li>
              <Link to="/register">Register</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
          }else{
            return (
              <nav className='BHenKALoda'>
                <div className='HEader'>
                  <Link to="/">
                    <img src={logo} className='logo' alt='logo'/>
                  </Link>
                  <button type="button">
                    <span></span>
                  </button>
                  <div className='flex-1'>
                    <ul className='bhai-sath-aaja'>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li>
                        <Link to="/booking">Booking</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            );
          }
}

export default Navbar;
