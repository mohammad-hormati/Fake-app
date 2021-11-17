import React from 'react';
import { Container, Typography } from '@mui/material';
import { Bookmark, ExitToApp, Home, List, Person, PhotoCamera, PlayCircleOutline, Settings, Storefront, TabletMac } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    leftbarContainer: {
        display: 'flex !important',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        backgroundColor: theme.palette.primary.main,
        height: '93vh',
        position: 'sticky',
        top: '7vh',
        paddingTop: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            backgroundColor: 'white',
            color: '#555',
            border: '1px solid #ece7e7',
        }
    },
    item: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: theme.spacing(2),

    },
    text: {
        fontWeight: '500',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    icon: {
        
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            fontSize: '18px',           
        },
        [theme.breakpoints.down('sm')]: {
            color: 'white',
        }
    }
}));

function Leftbar() {

    const classes = useStyles();

    return (
        <Container className={classes.leftbarContainer}>
            <div className={classes.item}>
                <Home className={classes.icon} />
                <Typography className={classes.text}>
                    Home Page
                </Typography>
            </div>
            <div className={classes.item}>
                <Person className={classes.icon} />
                <Typography className={classes.text}>
                    Friends
                </Typography>
            </div>
            <div className={classes.item}>
                <List className={classes.icon} />
                <Typography className={classes.text}>
                    Lists
                </Typography>
            </div>
            <div className={classes.item}>
                <PhotoCamera className={classes.icon} />
                <Typography className={classes.text}>
                    Camera
                </Typography>
            </div>
            <div className={classes.item}>
                <PlayCircleOutline className={classes.icon} />
                <Typography className={classes.text}>
                    Videos
                </Typography>
            </div>
            <div className={classes.item}>
                <TabletMac className={classes.icon} />
                <Typography className={classes.text}>
                    Apps
                </Typography>
            </div>
            <div className={classes.item}>
                <Bookmark className={classes.icon} />
                <Typography className={classes.text}>
                    Collections
                </Typography>
            </div>
            <div className={classes.item}>
                <Storefront className={classes.icon} />
                <Typography className={classes.text}>
                    Market Place
                </Typography>
            </div>
            <div className={classes.item}>
                <Settings className={classes.icon} />
                <Typography className={classes.text}>
                    Settings
                </Typography>
            </div>
            <div className={classes.item}>
                <ExitToApp className={classes.icon} />
                <Typography className={classes.text}>
                    Log Out
                </Typography>
            </div>
        </Container>
    )
}

export default Leftbar
