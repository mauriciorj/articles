import React from "react";
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';
import { MainPage } from '../src/containers/mainPage/mainPage';

const HomePage = () => {
  return <ThemeProvider theme={theme}><MainPage /></ThemeProvider>;
};

export default HomePage;
