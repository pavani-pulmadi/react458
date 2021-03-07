import React from 'react'
import { ListItemText,ListItemAvatar,makeStyles} from '@material-ui/core';
import spy from './assets/images/spy.png';
import avatar from './assets/images/avatar.png';
import Avatar from   '@material-ui/core/Avatar';
import Typography from   '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
   
    image:{
         paddingLeft:'180px'
         },
    root:{
        paddingRight:'180px',
        verticalAlign: 'middle',
        display: 'inline-flex'
      } ,
      nav:{
        borderTop:'solid green',
        
        borderBottom:'solid blue'
      }
}));
export default function Welcome ()
{
    const classes = useStyles();
    return(<>
    <div className={classes.nav}>
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
      <div className={classes.image}>
      <img src={spy} width="200px" />
     </div>
     </a>
     <a class="app-image float-right">
      <div >
    <Typography className={classes.root}>ravi
    <br/>
    <Avatar src={avatar}/> 
    </Typography>
    </div>
     </a>
   </nav> 
 </div>
 </>
    )

}