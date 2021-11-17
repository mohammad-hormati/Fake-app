import React from 'react'
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Feed from './Feed';
import Leftbar from './Leftbar';
import Rightbar from './Rightbar';

const useStyles = makeStyles((theme) => ({
    rightbar: {
        position: 'relative',
        top: '7vh',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    container: {
        
    },
    grid: {
        position: 'relative',
        top: '7vh',
    }
}));

function Main() {

    const classes = useStyles();

    return (
       <Grid container className={classes.container}>
           <Grid item xs={2} sm={2} className={classes.grid}>
                <Leftbar />
           </Grid>
           <Grid item xs={10} sm={7} className={classes.grid}>
                <Feed />
           </Grid>
           <Grid item sm={3} className={classes.rightbar}>
                <Rightbar />
           </Grid>
       </Grid>
    )
}

export default Main
