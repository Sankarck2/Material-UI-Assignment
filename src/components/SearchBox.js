import React from 'react'
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';

import "./styles.css"

export default function SearchBox() {
  return (
    <Box
      sx={{
        height: "6rem",
        backgroundColor: '#e1dcff',
        p: 2,
        borderRadius: '6px',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: "center",
        pl: 2.5
      }}
    >
    <span className="searchIcon"><SearchIcon /></span>
    <span className="TextBox">
      <input type="text" placeholder="Spam Mail Project" className="textBox__input"/>
    </span>
    </Box>
  )
}
