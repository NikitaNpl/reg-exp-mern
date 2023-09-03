import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchOneRegExp, clearFavorites } from "../../../redux/actions/account";

import MainBlock from "../../../components/MainBlock";

function Favorites() {
  const dispatch = useDispatch();
  const { account, favorites } = useSelector(({ account }) => account);


  React.useEffect(() => {
    dispatch(clearFavorites());
    account?.favorites?.forEach((item) => dispatch(fetchOneRegExp(item, true)))
  }, [dispatch]);

  return <MainBlock items={favorites} isLoaded isDemo={true} isFavorites={true}/>
}

export default Favorites;
