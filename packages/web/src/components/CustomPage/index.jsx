import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import { createRegExp } from '../../redux/actions/account';

import ProgressBar from './ProgressBar';
import CustomInput from './CustomInput';
import Cart from '../Cart';

function CustomPage({ pageNumber, pageHeader, items, selectedItem, pattern, cartItems, isDemo }) {
  const history = useHistory();
  const dispatch = useDispatch();
  console.log(cartItems)

  const handlerClickConfirm = () => {
    dispatch(createRegExp(cartItems));
    history.push("/");
  }

  return (
    <React.Fragment>
      <div className="page__number">{pageNumber}</div>
      <div className="page__header">{pageHeader}</div>
      <ProgressBar
        items={items}
        selectedItem={selectedItem}
      />
      <CustomInput item={selectedItem} pattern={pattern} />
      {isDemo ? (
        <>
          <Cart items={cartItems} isDemo />
          <div className="sendNewCart">
            <button onClick={handlerClickConfirm}>Подтвердить</button>
          </div>
        </>
      ) : null}
    </React.Fragment>
  )
}

export default CustomPage;
