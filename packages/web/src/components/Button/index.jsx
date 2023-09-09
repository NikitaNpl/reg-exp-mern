import React from 'react';

function Button({classNames, children}) {
  return (
    <button className={classNames}>
      {children}
    </button>
  )
}

export default Button;
