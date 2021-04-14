import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='top'>
        <div className='container'>
          <span>Store made with</span>
          <Link to='/'>
            <span>Soko</span>
          </Link>
        </div>
      </div>
      <div className='headerItem'>
        <div className='container'>
          <div className='headerItemSpace'>
            <div className='businessTitle'>
              <div className='titleIcon'>
                <Link to='/'>
                  <ion-icon name='home-outline'></ion-icon>
                </Link>
              </div>
              <div className='title'>
                <span>Target</span>
                <span>Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug</span>
              </div>
            </div>
            <div className='accountMenu'>
              <ul>
                <li>
                  <Link to='#'>
                    <span>
                      <ion-icon name='bag-outline'></ion-icon>
                    </span>
                    <span>Bag</span>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <span>
                      <ion-icon name='person-outline'></ion-icon>
                    </span>
                    <span>Account</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;