import React from 'react'
import {  makeStyles} from '@material-ui/core';
import Welcome from './Welcome.js';
import Body from './Body.js';



const useStyles=makeStyles({
  appMain:{
    paddingLeft:'320px',
    width:'100%',
  }
})
 export default function App() {
    const classes=useStyles();
    
    return (<>
    <div>
    <Welcome/>
    <Body/>
    </div>
 
      </>)
     }