import React from 'react'

import ProgressBar from './ProgressBar';
import CustomInput from './CustomInput';

function CustomPage({ pageNumber, pageHeader, items, selectedItem, onClickItem, pattern }) {

  return (
    <React.Fragment>
      <div className="page__number">{pageNumber}</div>
      <div className="page__header">{pageHeader}</div>
      <ProgressBar
        items={items}
        selectedItem={selectedItem}
        onClickItem={onClickItem}
      />
      <CustomInput item={selectedItem} pattern={pattern} />
    </React.Fragment>
  )
}

export default CustomPage;
