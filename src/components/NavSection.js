import React,{useState} from 'react'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import StorageIcon from '@mui/icons-material/Storage';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {  makeStyles } from '@material-ui/core';
import { useNavigate } from "react-router-dom";

import Datatable from "./Datatable";

import "./styles.css"

const useStyle = makeStyles((theme) => ({
    navContainer : {
      position: "relative"
    },
    sideNav: {
      borderRadius: "6px",
      background: "#e1dcff",
      padding: "1.5rem"
    },
    listItemTextContainer:{
      fontWeight: "200",
      padding: "1rem",
    },
    listItemText:{
      fontSize: "14px !important",
      fontFamily: "'Poppins' !important"
    }

  }));

export default function NavSection() {
  const classes = useStyle()
  let navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
   setOpen(!open);
 };

  const handleClick = (txt) =>{
    navigate(`/${txt}`)
  }

  return (
    <Grid container spacing={3}>
      <Grid item
            xs={6}
            md={2.5}
            classes={{item : classes.navContainer}}>
        <div className={classes.sideNav}>
            <List >
            <ChevronLeftIcon sx={{p:1.5}}/>
              {['Experiments', 'Data', 'Data Sources', 'Model Factory', 'Model Tuning'].map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      px: 2.5,
                    }}
                    onClick={() => handleClick(text.toLowerCase().split(" ").join(""))}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        justifyContent: 'center',
                      }}
                    >
                      <StorageIcon />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                         root: classes.listItemTextContainer,
                         primary: classes.listItemText
                       }}
                      primary={text} />
                    <ChevronRightIcon />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
        </div>
      </Grid>
      <Grid item xs={6} md={9.5}>
        <Datatable />
      </Grid>
    </Grid>

  )
}
