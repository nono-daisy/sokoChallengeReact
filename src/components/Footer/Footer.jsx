import React from 'react';
import delivery from '../../assets/images/fast-delivery.png';
import hrs from '../../assets/images/24-hours.png';
import worldOcean from '../../assets/images/world-oceans-day.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='mainFooter'>
        <ul>
          <li>
            <img src={delivery} alt='' />
            <span>Fast Delivery</span>
          </li>
          <li>
            <img src={worldOcean} alt='' />
            <span>Buyer Protection</span>
          </li>
          <li>
            <img src={hrs} alt='' />
            <span>Customer Support</span>
          </li>
        </ul>
      </div>
      <div className='bottomFooter'>
        <span className='storeDetail'>Store Detail</span>
        <span className='target'>Target</span>
        <span className='location'>
          Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug
        </span>
        <button type='button' className='whatsappButton'>
          <span>
            <ion-icon name='logo-whatsapp' />
          </span>
          <span>Chat with us</span>
        </button>
      </div>
    </div>
  );
};

export default Footer;