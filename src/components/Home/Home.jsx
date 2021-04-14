import React from 'react';
import { Layout } from '../Layout';
import { NavigationMenu, ShoppingBag, Content } from '.';

const Home = () => {
  return (
    <Layout>
      <div className='showcase'>
        <div className='container'>
          <div className='showcaseItem'>
            <NavigationMenu />
            <Content />
            <ShoppingBag />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
