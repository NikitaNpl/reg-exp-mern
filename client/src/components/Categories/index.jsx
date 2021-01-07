import React from 'react';

import { Button, CategoriesLoadingBlock } from '../index';

const Categories = React.memo(function Categories({ items, isLoaded, onSelectCategories, selectedItem, onWriteSearchBox }) {
  const searchRef = React.useRef("");

  function findByType(type) {
    onSelectCategories(type);
  }

  function handelerSearchBox(event) {
    event.preventDefault();
    onWriteSearchBox(searchRef.current.value);
    searchRef.current.value = ""
  }

  return (
    <div className="categories container">
      <div className="categories__list">
        <ul>
          {isLoaded ? items.map((item) => (
            <li
              onClick={findByType.bind(this, item.name)}
              key={item._id}
              className={`border-${item.color.name} ${selectedItem === item.name ? 'active' : ''}`}
            >{item.name}</li>
          )) : Array(6).fill(0).map((_, index) => <CategoriesLoadingBlock key={index} className="loadingBlock" />
          )}
        </ul>
      </div>
      <div className="categories__search">
        <form onSubmit={handelerSearchBox}>
          <Button>
            <svg width="54" height="45" viewBox="0 0 54 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M31 23C31 26.3137 28.3137 29 25 29C21.6863 29 19 26.3137 19 23C19 19.6863 21.6863 17 25 17C28.3137 17 31 19.6863 31 23ZM33 23C33 27.4183 29.4183 31 25 31C23.1513 31 21.449 30.3729 20.0944 29.3199L16.7071 32.7071C16.3166 33.0976 15.6834 33.0976 15.2929 32.7071C14.9024 32.3166 14.9024 31.6834 15.2929 31.2929L18.6801 27.9056C17.6271 26.551 17 24.8487 17 23C17 18.5817 20.5817 15 25 15C29.4183 15 33 18.5817 33 23Z" fill="#222222" />
            </svg>
          </Button>
          <input 
            type="text" 
            placeholder="Поиск..."
            ref={searchRef} 
          />
        </form>
      </div>
    </div>
  )
});

export default Categories;
