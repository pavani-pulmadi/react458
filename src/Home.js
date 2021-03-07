import React from 'react'
import spy from './assets/images/spy.png'
import man from './assets/images/man.png'
import  Grid  from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Button,} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
   
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#ffff',
  },
  form: {
    width: '50%',
    height:'15px' // Fix IE 11 issue.
   
  },
  title:{
   color:'green'
  },
  password:{
    width:'100%'
  },
  email:{
    width:'100%'
  },
  submit:{
   backgroundColor:'green'
  }
  
}));


export default function Home() 
{
  const classes = useStyles();
   function myFun(){
    <Typography variant="h6" className={classes.title}>
    Employee onboarding Admin portal
</Typography>
 }
   return(<>
  <Grid container spacing={0} border={2} >
  <Grid item  align="center"xs={6}>
        
        <img src={man} style={{height:'400px'}}/>
        </Grid>
        
        
   
     <Grid item  align="center"xs={6} style={{border:'2'}}>
      <img src={spy} style={{height:'5'}}/>
      
      <form className={classes.form} noValidate >
      <h3>Login</h3>
     <br/>
         
           <TextField className={classes.email}
            variant="outlined"
            name="email"
            label="Email Id">
             email
           </TextField>
           <br></br>
           <TextField className={classes.password}
            variant="outlined"
            name="password"
            label="Passcode"
            type="password"
            id="password"
            
          />
         <Button
            type="submit"
            fullWidth
            variant="contained"
            color="success.main"
            className={classes.submit}>
         login
          </Button>
          
       </form>
     </Grid>
      <Grid item align="center"xs={6}> 
      <Typography variant="h6" className={classes.title}>
           Employee onboarding
     </Typography> 
     
     </Grid  > 
     <Grid item align="center"xs={6}>
     <Button color="primary" onClick={ myFun}>
       user
    </Button>
    </Grid>
     </Grid>
    
   </>
  )
}