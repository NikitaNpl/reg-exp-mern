import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchOneRegExp, clearViewed } from "../../../redux/actions/account";

import MainBlock from "../../../components/MainBlock";

function Viewed() {
  const dispatch = useDispatch();
  const { account, viewed } = useSelector(({ account }) => account);


  React.useEffect(() => {
    dispatch(clearViewed());
    account?.viewed?.forEach((item) => dispatch(fetchOneRegExp(item)))
  }, [dispatch]);

  return <MainBlock items={viewed} isLoaded isDemo={true} isViewed={true}/>
}

export default Viewed;
