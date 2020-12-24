import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Box,
  Grid,
  InputBase,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export const Header = ({ headerLinks, logoInfo }) => {
  const activeTheme = useContext(ThemeContext);
  return (
    <Grid xs={12}>
      <AppBar
        position="static"
        style={{ backgroundColor: activeTheme.colors.themeBlue }}
      >
        <Toolbar>
          <Grid xs={2}>
            <Typography variant="h6" noWrap>
              {logoInfo?.map((logo) =>
                logo.type === "Text" ? logo.title : "IMAGE"
              )}
            </Typography>
          </Grid>
          <Grid xs={5}>
            <div
              style={{
                backgroundColor: activeTheme.colors.themeWhite,
                borderRadius: "5px",
                position: "relative",
              }}
            >
              <InputBase
                placeholder="Search…"
                style={{
                  color: activeTheme.colors.themeGray,
                  paddingLeft: "10px",
                  position: "relative",
                  width: "90%",
                }}
                inputProps={{ "aria-label": "search" }}
              />
              <div
                style={{
                  alignitems: "center",
                  display: "flex",
                  height: "100%",
                  justifycontent: "center",
                  paddingTop: "5px",
                  pointerevents: "none",
                  position: "absolute",
                  right: "0",
                  top: "0",
                  width: "10%",
                }}
              >
                <SearchIcon style={{ color: activeTheme.colors.themeGray }} />
              </div>
            </div>
          </Grid>
          <Grid xs={5}>
            <Box display="flex" justifyContent="flex-end">
              {headerLinks?.map((header, index) =>
                header.type === "Default" ? (
                  <Typography
                    key={index}
                    style={{
                      color: `${activeTheme.colors.themeWhite}`,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      paddingRight: "30px",
                    }}
                  >
                    {header.headerTitle}
                  </Typography>
                ) : header.type === "Highlight" ? (
                  <Link
                    to={header.link}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      textDecoration: "none",
                    }}
                  >
                    <Typography
                      key={index}
                      style={{
                        color: `${activeTheme.colors.themeWhite}`,
                        fontWeight: "600",
                        paddingRight: "30px",
                      }}
                    >
                      {header.headerTitle}
                    </Typography>
                  </Link>
                ) : (
                  <Button
                    background={activeTheme.colors.themeWhite}
                    label={header.headerTitle}
                  />
                )
              )}
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

Header.propTypes = {
  /**
   * Header links types
   */
  headerLinks: PropTypes.shape({
    headerTitle: PropTypes.string,
    link: PropTypes.string,
    type: PropTypes.oneOf(["Default" | "Highlight" | "Button"]),
  }),
  /**
   * Logo information: can be a string or an image
   */
  logoInfo: PropTypes.shape({
    altText: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.oneOf(["Text", "Image"]),
  }),
};
