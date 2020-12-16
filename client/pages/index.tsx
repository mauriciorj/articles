import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';
import RouterApp from './routerApp';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.APOLLO_SERVER_URL,
  cache: new InMemoryCache(),
});

const HomePage = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <RouterApp />
        </ThemeProvider>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default HomePage;
