import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../src/styles/theme";
import RouterApp from "./routerApp";
import { BrowserRouter } from "react-router-dom";

const HomePage = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <RouterApp />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default HomePage;
