import React from 'react';
import PropTypes from 'prop-types';

/**
 * A simple button component.
 */
function Button({classNames, children}) {
  return (
    <button className={classNames}>
      {children}
    </button>
  )
}

Button.propTypes = {
  /**
   * The classNames for attribute className.
   */
  classNames: PropTypes.string.isRequired,
  /**
   * The children for content button.
   */
  children: PropTypes.element.isRequired,
};


export default Button;
