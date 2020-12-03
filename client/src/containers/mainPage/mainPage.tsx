import React from "react";
import { Grid } from "@material-ui/core";
import { MainHeader } from "../../components/headers/mainHeader";

export const MainPage = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MainHeader />
        </Grid>
      </Grid>
    </div>
  );
};
