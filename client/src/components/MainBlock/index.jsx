import React from 'react';

import { Cart, CartLoadingBlock } from '../../components/index';


const Home = React.memo(function Home({ items, isLoaded, isDemo, isViewed, isFavorites }) {

  return (
    <div className="main container">
      {isLoaded ? (
        !!items?.length ? (
          items.map((item) => (
            <Cart
              key={item._id}
              items={item}
              isDemo={isDemo}
              isViewed={isViewed}
              isFavorites={isFavorites}
            />
          ))
        ) : <h2>Не удалось найти 😕</h2>
      ) : Array(8).fill(0).map((_, index) => <CartLoadingBlock key={index} />)}
    </div>
  )
});

export default Home;
