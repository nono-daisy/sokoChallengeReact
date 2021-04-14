import React from 'react';
import sad from '../../../assets/images/sad.png';

const ShoppingBag = () => {
  return (
    <div className='shoppingBag'>
      <div className='title'>
        <div className='t'>
          <span>Bag</span>
        </div>
        <div className='number'>
          <span>0</span>
        </div>
      </div>
      <div className='notFound'>
        <div className='image'>
          <img src={sad} alt='' />
        </div>
        <div className='message'>
          <span>It's empty here</span>
          <span>Start shopping to add item to your bag</span>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBag;
