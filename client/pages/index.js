import React from "react";
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/defaultTheme';
import { MainPage } from '../src/containers/mainPage/mainPage';

const HomePage = () => {
  return <ThemeProvider theme={theme}><MainPage /></ThemeProvider>;
};

export default HomePage;
