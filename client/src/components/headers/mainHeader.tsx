import React from "react";
import { Header } from "./css";
import { Button, SearchBar } from "wcl_articles/src/components/Button/Button";
import { colors } from "../../styles/theme";
import { Box, Typography, Toolbar } from "@material-ui/core";

export const MainHeader = () => {
  return (
    <Header width={1} height="60px" background={colors.themeBlue}>
      <Toolbar>
        <Typography variant="h6">articles</Typography>
        <SearchBar
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
        <Button label="component test" />
      </Toolbar>
    </Header>
  );
};
