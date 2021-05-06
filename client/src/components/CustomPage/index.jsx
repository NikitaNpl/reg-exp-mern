import React from 'react'

import ProgressBar from './ProgressBar';
import CustomInput from './CustomInput';
import Cart from '../Cart';

function CustomPage({ pageNumber, pageHeader, items, selectedItem, pattern, cartItems, isDemo }) {

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
            <button>Подтвердить</button>
          </div>
        </>
      ) : null}
    </React.Fragment>
  )
}

export default CustomPage;
