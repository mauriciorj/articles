import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import PropTypes from "prop-types";
import { Toolbar, Box, Grid, InputBase, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { MainHeader, SearchDiv, SearchIconDiv } from "./css";
import { Button } from '../Button/Button';
import { Link } from "react-router-dom";

export const Header = ({ logoInfo, headerLinks }) => {
  const activeTheme = useContext(ThemeContext);
  return (
    <Grid xs={12}>
      <MainHeader position="static" background={activeTheme.colors.themeBlue}>
        <Toolbar>
          <Grid xs={2}>
            <Typography variant="h6" noWrap>
              {logoInfo?.map((logo) =>
                logo.type === "Text" ? (
                  <Link
                    to={logo.link}
                    style={{
                      color: `${activeTheme.colors.themeWhite}`,
                      textDecoration: "none",
                    }}
                  >
                    {logo.title}
                  </Link>
                ) : (
                  <Link to={logo.link}>IMAGE</Link>
                )
              )}
            </Typography>
          </Grid>
          <Grid xs={5}>
            <SearchDiv background={activeTheme.colors.themeWhite}>
              <InputBase
                placeholder="Search…"
                style={{
                  position: "relative",
                  color: activeTheme.colors.themeGray,
                  paddingLeft: "10px",
                  width: "90%",
                }}
                inputProps={{ "aria-label": "search" }}
              />
              <SearchIconDiv>
                <SearchIcon style={{ color: activeTheme.colors.themeGray }} />
              </SearchIconDiv>
            </SearchDiv>
          </Grid>
          <Grid xs={5}>
            <Box display="flex" justifyContent="flex-end">
              {headerLinks?.map((header, index) =>
                header.type === "Default" ? (
                  <Typography
                    key={index}
                    style={{
                      color: `${activeTheme.colors.themeWhite}`,
                      paddingLeft: '30px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                  >
                    <Link
                      to={header.link}
                      style={{
                        color: `${activeTheme.colors.themeWhite}`,
                        textDecoration: "none",
                      }}
                    >
                      {header.headerTitle}
                    </Link>
                  </Typography>
                ) : header.type === "Highlight" ? (
                  <Typography
                    key={index}
                    style={{
                      color: `${activeTheme.colors.themeWhite}`,
                      fontWeight: '600',
                      paddingLeft: '30px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                  >
                    <Link
                      to={header.link}
                      style={{
                        color: `${activeTheme.colors.themeWhite}`,
                        textDecoration: "none",
                      }}
                    >
                      {header.headerTitle}
                    </Link>
                  </Typography>
                ) : (
                  <Link
                    to={header.link}
                    style={{
                      color: `${activeTheme.colors.themeWhite}`,
                      textDecoration: "none",
                      paddingLeft: "30px",
                    }}
                  >
                    <Button label={header.headerTitle} background={activeTheme.colors.themeWhite}/>
                  </Link>
                )
              )}
            </Box>
          </Grid>
        </Toolbar>
      </MainHeader>
    </Grid>
  );
};

Header.propTypes = {
  /**
   * Logo information: can be a string or an image
   */
  logoInfo: PropTypes.shape({
    type: PropTypes.oneOf(["Text", "Image"]),
    title: PropTypes.string,
    altText: PropTypes.string,
    link: PropTypes.string,
  }),
  /**
   * Header links types
   */
  headerLinks: PropTypes.shape({
    headerTitle: PropTypes.string,
    type: PropTypes.oneOf(["Default" | "Highlight" | "Button"]),
    link: PropTypes.string,
  }),
};
