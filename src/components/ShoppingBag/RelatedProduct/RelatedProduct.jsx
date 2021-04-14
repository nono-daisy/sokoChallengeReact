import React from 'react';
import { RelatedProductItem } from '..';
import { relatedProduct } from '../../../utils';

const RelatedProduct = (props) => {
  return (
    <div className='relatedProduct'>
      <div className='relatedProductHeader'>
        <div className='title'>Related Products</div>
        <div className='actions'>
          <button type='button'>
            <ion-icon name='chevron-back-outline'></ion-icon>
          </button>
          <button type='button' className='active'>
            <ion-icon name='chevron-forward-outline'></ion-icon>
          </button>
        </div>
      </div>
      <div className='relatedProductItem'>
        <ul>
          {relatedProduct && relatedProduct.length > 0 && (
            <>
              {relatedProduct.map((item, index) => (
                <RelatedProductItem item={item} key={index} />
              ))}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RelatedProduct;
