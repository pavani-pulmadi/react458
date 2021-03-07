import React from 'react'
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import {  Badge, IconButton,makeStyles} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Home  from './Home.js';
const useStyles = makeStyles((theme) => ({
    title:{
        margintop: theme.spacing(0),
    }
}));
export default ()=>
{
    const classes = useStyles();
    return(<>
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#blue',borderBottom:'1px white solid',borderTop:'1px white solid'}}>
    
<div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
           <div className="navbar-nav">
              <IconButton>
               
          <ViewModuleIcon/><Typography variant="h6" className={classes.title}>
            Employee onboarding
         <Home/>
        
          </Typography> 
          <hr></hr>
         
           
              </IconButton>
              
             </div>
        </div>
    </nav>

            </>
    )


}