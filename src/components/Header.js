import React from 'react';
import Nav from './Nav';
import Logo from '../assets/images/Logo.svg';
function Header() {
  return (
    <>
      <div className='grid-container'>
        <div className='grid-inner'>
          <img src={Logo} alt='Little Lemon'  className='logo'/>
          <Nav />
        </div>
      </div>
    </>
  );
}

export default Header;
