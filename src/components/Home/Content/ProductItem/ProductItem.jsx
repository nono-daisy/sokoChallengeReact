import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
  const { item } = props;

  if (!item) {
    return null;
  }
  return (
    <li>
      <div className='detail'>
        <Link to='/my/bag'>
          <div className='image'>
            <img src={item.image} alt='' />
          </div>
          <div className='text'>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        </Link>
      </div>
      <div className='button'>
        <button type='button'>
          <span>
            <ion-icon name='add-outline'></ion-icon>
          </span>
          <span>Add</span>
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
