import React, { useContext } from "react";
import PropTypes from "prop-types";
//import { BaseButton } from './css';
import { Button as BaseButton } from "@material-ui/core";
import { ThemeContext } from "styled-components";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  background,
  color,
  disableElevation,
  label,
  onClick,
  size,
}) => {
  const activeTheme = useContext(ThemeContext);

  return (
    <BaseButton
      style={{
        backgroundColor: activeTheme.colors[background],
        color: activeTheme.colors[color],
      }}
      disableElevation={disableElevation}
      onClick={onClick}
      size={size}
      variant="contained"
    >
      {label}
    </BaseButton>
  );
};

Button.propTypes = {
  /**
   * Background color
   */
  background: PropTypes.string,
  /**
   * Background color
   */
  color: PropTypes.string,
  /**
   * Disable elevation (3D appearance)
   */
  disableElevation: PropTypes.bool,
  /**
   * Button Label
   */
  label: PropTypes.string.isRequired,
  /**
   * Click event handler
   */
  onClick: PropTypes.func,
  /**
   * Button Size: large, medium or small
   */
  size: PropTypes.string,
};

Button.defaultProps = {
  background: "#FFF",
  color: "themeBlack",
  disableElevation: false,
  onClick: undefined,
  size: "medium",
};
