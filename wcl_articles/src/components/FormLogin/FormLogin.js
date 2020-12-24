import React, { useContext } from "react";

import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import { Button } from "../Button/Button";

import { Box, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import GoogleOutlined from "@ant-design/icons/GoogleOutlined";

import { Link } from "react-router-dom";

export const FormLogin = ({ ...args }) => {
  const activeTheme = useContext(ThemeContext);
  const matches = useMediaQuery("(min-width: 850px)");

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
            variant="h4"
          >
            {args.title}
          </Typography>
        </Box>
        <Box mb={2} textAlign="center" width="100%">
          {args.subtitle}
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="nowrap"
          justifyContent="center"
          mb={2}
        >
          <Box width="100%">
            <Link to={args.facebookLink} style={{ textDecoration: "none" }}>
              <Box
                alignItems="center"
                color="#FFF"
                display="flex"
                flexWrap="wrap"
                height={matches ? "40px" : "60px"}
                justifyContent="center"
                mx={1}
                style={{
                  backgroundColor: "#4267B2",
                  borderRadius: "3px",
                }}
                textAlign="center"
              >
                {args?.socialNetworks?.facebook.iconHtml}
                <FacebookIcon style={{ marginRight: "5px" }} />
                Facebook
              </Box>
            </Link>
          </Box>
          <Box width="100%">
            <Link to={args.googleLink} style={{ textDecoration: "none" }}>
              <Box
                alignItems="center"
                color="#FFF"
                display="flex"
                flexWrap="wrap"
                height={matches ? "40px" : "60px"}
                justifyContent="center"
                mr={1}
                style={{
                  backgroundColor: "#DB4437",
                  borderRadius: "3px",
                }}
                textAlign="center"
              >
                <GoogleOutlined
                  style={{ marginRight: "5px", fontSize: "22px" }}
                />{" "}
                Google
              </Box>
            </Link>
          </Box>
          <Box width="100%">
            <Link to={args.githubLink} style={{ textDecoration: "none" }}>
              <Box
                alignItems="center"
                color="#FFF"
                display="flex"
                flexWrap="wrap"
                height={matches ? "40px" : "60px"}
                justifyContent="center"
                mr={1}
                style={{
                  backgroundColor: "#333",
                  borderRadius: "3px",
                }}
                textAlign="center"
              >
                <GitHubIcon style={{ marginRight: "5px" }} /> Github
              </Box>
            </Link>
          </Box>
          <Box width="100%">
            <Link to={args.twitterLink} style={{ textDecoration: "none" }}>
              <Box
                alignItems="center"
                color="#FFF"
                display="flex"
                flexWrap="wrap"
                height={matches ? "40px" : "60px"}
                justifyContent="center"
                mr={1}
                style={{
                  backgroundColor: "#1DA1F2",
                  borderRadius: "3px",
                }}
                textAlign="center"
              >
                <TwitterIcon style={{ marginRight: "5px" }} /> Twitter
              </Box>
            </Link>
          </Box>
        </Box>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="row"
          flexWrap="nowrap"
          justifyContent="center"
          mb={2}
          textAlign="center"
        >
          <Box mx={1} width="30%">
            <hr style={{ border: "1px solid #878787" }} />
          </Box>
          <Box mx={1} pb="3px" style={{ textAlign: "center" }}>
            {args.textBetweenLogins}
          </Box>
          <Box width="30%" mx={1}>
            <hr style={{ border: "1px solid #878787" }} />
          </Box>
        </Box>
        <Grid
          container
          direction="row"
          textAlign="center"
          style={{ marginTop: "30px", paddingBottom: "20px" }}
          xs={12}
        >
          <Grid xs={1}></Grid>
          <Grid xs={10}>
            <form>
              <CssTextField
                error={args.emailError}
                fullWidth
                helperText={args.emailError ? args.emailErrorText : null}
                id="email"
                label={args.emailLabel}
                style={{ marginBottom: "10px" }}
                type="email"
                variant="outlined"
              />
              <CssTextField
                error={args.passwordError}
                fullWidth
                helperText={args.passwordError ? args.passwordErrorText : null}
                id="password"
                label={args.passwordLabel}
                style={{ marginBottom: "10px" }}
                type="password"
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
        <Grid
          container
          direction="row"
          textAlign="center"
          style={{ marginTop: "30px", paddingBottom: "30px" }}
          xs={12}
        >
          <Grid xs={1}></Grid>
          <Grid xs={10}>
            <Link
              to={args.forgotPaswordLink}
              style={{ textDecoration: "none" }}
            >
              <Typography
                noWrap
                style={{
                  fontWeight: "500",
                  color: activeTheme.colors.themeBlue,
                }}
                variant="subtitle1"
              >
                {args.forgotPasword}
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

FormLogin.propTypes = {
  /**
   * Title to Form Login
   */
  title: PropTypes.string.isRequired,
  /**
   * Subtitle to inform the ability to use social media to login
   */
  subtitle: PropTypes.string.isRequired,
  /**
   * Link to facebook action
   */
  facebookLink: PropTypes.string.isRequired,
  /**
   * Link to google action
   */
  googleLink: PropTypes.string.isRequired,
  /**
   * Link to github action
   */
  githubLink: PropTypes.string.isRequired,
  /**
   * Link to twitter action
   */
  twitterLink: PropTypes.string.isRequired,
  /**
   * Text between social medias and regular login
   */
  textBetweenLogins: PropTypes.string.isRequired,
  /**
   * Email label and placeholder
   */
  emailLabel: PropTypes.string.isRequired,
  /**
   * Email error: true or false
   */
  emailError: PropTypes.bool.isRequired,
  /**
   * Email error message
   */
  emailErrorText: PropTypes.string.isRequired,
  /**
   * Password label and placeholder
   */
  passwordLabel: PropTypes.string.isRequired,
  /**
   * Password error: true or false
   */
  passwordError: PropTypes.bool.isRequired,
  /**
   * Password error messge
   */
  passwordErrorText: PropTypes.string.isRequired,
  /**
   * Text to recovery password
   */
  forgotPasword: PropTypes.string.isRequired,
  /**
   * Link to recovery password
   */
  forgotPaswordLink: PropTypes.string.isRequired,
  /**
   * Submit button label
   */
  buttonLabel: PropTypes.string.isRequired,
};
