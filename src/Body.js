import React from 'react'
import { Grid, makeStyles, TextField} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    palette: {
      marginBottom:'15px',
      paddingBottom:'15px',
      primary: {
        // Purple and green play nicely together.
        main: '#4caf50',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
      title:{
        marginBottom:theme.spacing(2),
        border:'ipx solid blue',
        display:'flex',
        flexDirection:'column'
      }
    },
}));
     export default function Body() {
        const classes = useStyles();
    return(<>
    <div >
      <Container maxWidth="md" spacing={2}>
        <br/>
        <ThemeProvider className={classes.title}>
          <Button color="secondary">Welcome</Button>
          <Button color="primary">Ravi Jana</Button>
        </ThemeProvider>
        <Grid xs={12} style={{backgroundColor:'#eeeeee'}}>
        <TextField className={classes.root}
          name="email"
          label="Email Id">
            email
        </TextField>
        </Grid>
      </Container>
    </div>
        </>)  
         }