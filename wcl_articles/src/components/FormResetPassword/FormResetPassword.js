import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";

import { Button } from "../Button/Button";
import { Box, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

export const FormResetPassword = ({ ...args }) => {
  const activeTheme = useContext(ThemeContext);

  const CssTextField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: activeTheme.colors.themeBlue,
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: activeTheme.colors.themeBlue,
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: activeTheme.colors.themeLightGray,
        },
        "&:hover fieldset": {
          borderColor: activeTheme.colors.themeGray,
        },
        "&.Mui-focused fieldset": {
          borderColor: activeTheme.colors.themeBlue,
        },
      },
    },
  })(TextField);

  return (
    <Grid xs={10} sm={10} md={6} lg={5} xl={5}>
      <Paper elevation={3}>
        <Box width="100%" pt={2} mb={4} textAlign="center">
          <Typography
            noWrap
            style={{ fontWeight: "700", color: activeTheme.colors.themeGray }}
            variant="h5"
          >
            {args.title}
          </Typography>
        </Box>
        <Grid
          container
          direction="row"
          textAlign="center"
          style={{ marginTop: "30px", paddingBottom: "30px" }}
          xs={12}
        >
          <Grid xs={1}></Grid>
          <Grid xs={10}>
            <form>
              <CssTextField
                error={args.resetPasswordError}
                fullWidth
                helperText={
                  args.resetPasswordError ? args.resetPasswordErrorText : null
                }
                id="lastName"
                label={args.resetPasswordLabel}
                style={{ paddingBottom: '10px' }}
                type="text"
                variant="outlined"
              />
              <Button
                background="themeBlue"
                color="themeWhite"
                label={args.buttonLabel}
                type="submit"
              />
            </form>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

FormResetPassword.protoType = {
  /**
   * Title to Form Login
   */
  title: PropTypes.string.isRequired,
  /**
   * First Name label and placeholder
   */
  resetPasswordLabel: PropTypes.string.isRequired,
  /**
   * First Name error: true or false
   */
  resetPasswordError: PropTypes.bool.isRequired,
  /**
   * First Name error message
   */
  resetPasswordErrorText: PropTypes.string.isRequired,
  /**
   * Submit button label
   */
  buttonLabel: PropTypes.string.isRequired,
};
