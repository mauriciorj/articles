import React from 'react';
import { Grid } from '@material-ui/core';
import { MainHeader } from '../../components/headers/mainHeader';
import { ArticleCard } from 'wcl_articles/src/components/ArticleCard/ArticleCard';
import ArticlesFeed from '../../components/articlesFeed/ArticlesFeed';

export const MainPage = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MainHeader />
          {/* TODO: Create a layout component */}
          <div style={{ marginBottom: '2rem' }}></div>
          <ArticlesFeed></ArticlesFeed>
        </Grid>
      </Grid>
    </div>
  );
};
