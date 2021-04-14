import React from 'react';

const RelatedProductItem = (props) => {
  const { item } = props;

  if (!item) {
    return null;
  }
  return (
    <li>
      <div className='image'>
        <img src={item.image} alt='' />
      </div>
      <div className='heading'>{item.name}</div>
    </li>
  );
};

export default RelatedProductItem;
