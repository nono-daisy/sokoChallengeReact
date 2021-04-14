import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from '../Home';
import { ShoppingBag } from '../ShoppingBag';

const router = [
  {
    component: <Home />,
    exact: true,
    path: '/',
  },
  {
    component: <ShoppingBag />,
    exact: true,
    path: '/my/bag',
  },
];

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
      {router.map((item, index) => (
        <Route path={item.path} exact={item.exact} key={index}>
          {item.component}
        </Route>
      ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
