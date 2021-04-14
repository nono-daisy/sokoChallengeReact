import React from 'react';
import { NavigationListItem } from '.';

const list = [
  {
    name: 'Electronics',
    number: 12,
    active: true
  },
  {
    name: 'Face Masks',
    number: 3,
  },
  { name: 'Fresh food', number: 8 },
  { name: 'Grocery', number: 8 },
  { name: 'Home', number: 24 },
  { name: 'Kids', number: 8 },
];

const NavigationMenu = () => {
  return (
    <div className='navigationMenu'>
      {list && list.length > 0 && (
        <ul>
          {list.map((item, index) => (
            <NavigationListItem key={index} items={item} />
          ))}
          <NavigationListItem
            items={{
              name: 'View All categories',
              icon: <ion-icon name='chevron-forward-outline'></ion-icon>,
            }}
          />
        </ul>
      )}
    </div>
  );
};

export default NavigationMenu;
