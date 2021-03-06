import React from 'react';
import PropTypes from 'prop-types';
import { BaseButton } from './css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, size, onClick, background }) => {
  return (
    <BaseButton
      variant="contained"
      disableElevation
      onClick={onClick}
      size={size}
      background={background}
    >
      {label}
    </BaseButton>
  );
};

Button.propTypes = {
  /**
   * What background color to use
   */
  label: PropTypes.string.isRequired,
  /**
   * What size to use
   */
  size: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  size: 'medium',
  onClick: undefined,
};
