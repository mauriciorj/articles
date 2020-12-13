import React from "react";
import { Grid } from "@material-ui/core";
import { MainHeader } from "../../components/headers/mainHeader";
import HeaderPage from '../../../pages/headerPage';
export const config = { amp: true }

export const MainPage = () => {
  return (
    <div>
      <HeaderPage />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MainHeader />
        </Grid>
      </Grid>
    </div>
  );
};
