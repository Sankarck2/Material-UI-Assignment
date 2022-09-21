import React from 'react'
import MUIDataTable from "mui-datatables";
import {  makeStyles } from '@material-ui/core';
import { useLocation } from "react-router-dom";

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      border: "none",
      borderRadius: "8px",
      " & .MuiPaper-root":{
        boxShadow: "unset",
        borderRadius: "8px",
        width: "100%"
      }
  },
    columnHeader:{

      '& span': {
        '& Button': {
          fontWeight: '600',
          fontFamily: 'Poppins, sans-serif',
        }
      }
    },
    arrangeCenter:{
        textAlign: 'center'
    },
    centeredHeader: {
      '& span': {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }
    },
    rowFont:{
     ' & div:nth-child(2)':{
       fontFamily: 'Poppins, sans-serif',
       fontSize: "12px",
       fontWeight: '500',
       padding: "0.5rem"

     }
    }
  })
);

export default function Datatable(){
  const classes = useStyles();
  const {pathname} = useLocation()
  console.log({pathname})
  const columns = [
   {
    name: "name",
    label: "Name",
    options: {
     filter: true,
     sort: true,
     setCellHeaderProps: () => ({
         style:{ backgroundColor: "#fff4ea"},
         className: classes.columnHeader,
       }),
     setCellProps: value => {
        return {
          className: classes.rowFont,
        };
      },
    }
   },
   {
    name: "company",
    label: "Company",
    options: {
     filter: true,
     sort: true,
     setCellHeaderProps: () => ({
         style:{ backgroundColor: "#fff4ea"},
         className: classes.columnHeader,
       }),
     setCellProps: value => {
          return {
            className: classes.rowFont,
          };
        },
    }
   },
   {
    name: "city",
    label: "City",
    options: {
     filter: true,
     sort: true,
     setCellHeaderProps: () => ({
         style:{ backgroundColor: "#fff4ea"},
         className: classes.columnHeader,
       }),
     setCellProps: value => {
         return {
           className: classes.rowFont,
         };
       },
    }
   },
   {
    name: "state",
    label: "State",
    options: {
     filter: true,
     sort: true,
     setCellHeaderProps: () => ({
         style:{ backgroundColor: "#fff4ea"},
         className: classes.columnHeader,
       }),
     setCellProps: value => {
          return {
            className: classes.rowFont,
          };
        },
    }
   },
  ];

  const data = [
   { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
   { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
   { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
   { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
   { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
   { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
   { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },

  ];

  const options = {
    filterType: 'checkbox',
    sort: true,
    download: false,
    filter: false,
    print: false,
    search: false,
    viewColumns: false
  };
  return(
    <>
      {(pathname ==="/data" || pathname === "/" ) &&
        <div className={`${classes.root}`}>
          <MUIDataTable
            title={""}
            data={data}
            columns={columns}
            options={options}
          />
        </div>
      }
      {pathname ==="/experiments" &&
        <div>
          <h1>EXPERIMENTS</h1>
        </div>
      }
      {pathname ==="/datasources" &&
        <div>
          <h1>DATA SOURCES</h1>
        </div>
      }
    </>
  )

}
