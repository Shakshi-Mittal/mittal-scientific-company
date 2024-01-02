import React from 'react';
import LogoImg from './logo.png';

const Logo= () => {
    return (     
            <div className="logo flex justify-start ml-24">
                <img className="logoImg ml-12 w-32" alt='logo' src = {LogoImg} />
            </div>
    );
  }

  export default Logo;