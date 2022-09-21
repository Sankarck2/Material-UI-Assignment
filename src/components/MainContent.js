import React from "react";
import Grid from "@mui/material/Grid";
import {  makeStyles } from '@material-ui/core';

import SearchBox from "./SearchBox";
import FileInfo from "./FileInfo"
import NavSection from "./NavSection"
import "./styles.css"

const useStyle = makeStyles((theme) => ({
    justiFyContent : {
      justiFyContent: "space-evenly"
    }
  }));

function MainContent() {
  const classes = useStyle()
  return (
    <div className="main-content-wrapper">
      <Grid container spacing={3}>
        <Grid item xs={6} md={6}>
          <SearchBox />
        </Grid>
        <Grid item xs={6} md={6}>
          <FileInfo />
        </Grid>
        <Grid item xs={12} md={12}>
          <NavSection />
        </Grid>
      </Grid>
    </div>
  );
}

export default MainContent;
