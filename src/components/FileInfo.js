import React from 'react'
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import {  makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  mailBoxInfo: {
    display: "flex",
    flexDirection: "column !important"
  }
  }));
export default function FileInfo() {
  const classes = useStyle()
  return (
    <Box
    sx={{
        height: "6rem",
        backgroundColor: '#fff4ea',
        p: 2,
        borderRadius: '6px'
    }}>
    <Grid container spacing={3}>
      <Grid item xs={3} md={4} classes={{item : classes.mailBoxInfo}}>
        <h3>Spam Mail Project</h3>
        <div className="iconList">
          <DeleteOutlineIcon />
          <EditOutlinedIcon />
          <VisibilityOutlinedIcon />
        </div>
      </Grid>
      <Grid item xs={3} md={8}>
      <div className="userDetails">
        <span>Author Name: John </span>
        <span>Created on: 25/5/2000 </span>
        <span>Updated on: 5/6/2005 </span>
      </div>
      </Grid>
    </Grid>
  </Box>
  )
}
