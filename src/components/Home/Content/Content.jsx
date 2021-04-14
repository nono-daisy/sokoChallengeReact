import React from 'react';
import { ProductItem } from './ProductItem';
import { listProduct } from '../../../utils';

const Content = () => {
  return (
    <div className='content'>
      <div className='searchContent'>
        <div className='inputSearch'>
          <input type='text' placeholder='search for products ...' />
        </div>
        <div className='buttonSearch'>
          <button type='button'>
            <ion-icon name='search-outline'></ion-icon>
          </button>
        </div>
      </div>
      <div className='categoryTitle'>
        <div>Electronics</div>
        <div>12</div>
      </div>
      <div className='productItem'>
        <ul>
          {listProduct && listProduct.length > 0 && (
            <>
              {listProduct.map((item, index) => (
                <ProductItem item={item} key={index} />
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Content;
