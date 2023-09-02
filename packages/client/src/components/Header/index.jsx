import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { setChosenCategory, setSearchText } from '../../redux/actions/categories';

import { Authorization } from '../index';

function Header() {
  const dispatch = useDispatch();

  function handlerChosenCategory(type) {
    dispatch(setChosenCategory(type));
    dispatch(setSearchText(""));
  }

  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <Link
            to='/'
            onClick={handlerChosenCategory.bind(this, null)}
          >
            <h1>RegExp Library</h1>
          </Link>
        </div>
        <div className="header__account">
          <Authorization />
        </div>
      </div>
    </div>
  )
}

export default Header;
