import React from 'react';
import { Link } from 'react-router-dom';

const NavigationListItem = (props) => {
  const { items } = props;

  if (!items) {
    return null;
  }
  return (
    <li
      className={`${items.icon ? 'viewAllCategory' : ''} ${
        items.active ? 'active' : ''
      }`}
    >
      <Link to='#'>
        <span>{items.name}</span>
        {items.number && <span>({items.number})</span>}
        {items.icon && <span>{items.icon}</span>}
      </Link>
    </li>
  );
};

export default NavigationListItem;
