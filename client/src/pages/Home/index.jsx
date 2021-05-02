import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, MainBlock } from '../../components/index';
import { fetchRegExp, } from '../../redux/actions/regExp';
import { fetchCategories, setChosenCategory, setSearchText } from '../../redux/actions/categories';

function Home() {
  const dispatch = useDispatch();
  const { items, regExpIsLoaded } = useSelector(({ regExp }) => regExp);
  const { categories, 
          chosenCategory, 
          categoriesIsLoaded, 
          searchText  
        } = useSelector(({ categories }) => categories);
  
  React.useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(fetchRegExp(chosenCategory, searchText))
  }, [chosenCategory, searchText,  dispatch]);

  const onSelectCategories = React.useCallback((type) => {
    dispatch(setSearchText(""));
    dispatch(setChosenCategory(type));
  }, [dispatch]);

  const onWriteSearchBox = React.useCallback((search) => {
    onSelectCategories(null);
    dispatch(setSearchText(search));
  }, [onSelectCategories, dispatch]);


  return (
    <>
      <Categories
        items={categories}
        selectedItem={chosenCategory}
        isLoaded={categoriesIsLoaded}
        onSelectCategories={onSelectCategories}
        onWriteSearchBox={onWriteSearchBox}
      />
      <MainBlock
        items={items}
        isLoaded={regExpIsLoaded}
      />
    </>
  )
}

export default Home;
