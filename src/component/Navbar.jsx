import React ,{useState} from 'react';
import { Cancel, Mail, Notifications, Search } from '@mui/icons-material';
import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import {alpha} from '@mui/material/styles';


const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    search: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.down('sm')]: {
            display: (props)=> props.open ? 'flex' : 'none',
        },
    },
    input: {
       color: '#fff !important',
       marginLeft: theme.spacing(1),
       flexGrow: 2,
       textDecoration: 'none',
    },
    cancle: {
        [theme.breakpoints.up('sm')]: {
            display: 'none !important',
        }
    },
    searchButton: {
        marginRight: theme.spacing(2),
        display: (props)=> props.open ? 'none' : 'inline-block',   
        [theme.breakpoints.up('sm')]:{
            display: 'none !important',
        },
    },
    icons: {
        display: (props)=> props.open ? 'none' : 'flex',
        alignItems: 'center',
    },
    badge: {
        marginRight: theme.spacing(2),
    }
}))

function Navbar() {

    const [open, setOpen] = useState(false);
    const classes = useStyles({open});

    return (
        <AppBar position="fixed" sx={{height: '7vh'}}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6">
                    FAKE APP
                </Typography>
                <div className={classes.search}>
                    <Search />
                    <InputBase color="primary" placeholder="Search..." className={classes.input} />
                    <Cancel className={classes.cancle} onClick={()=> setOpen(false)}/>
                </div>
                <div className={classes.icons}>
                    <Search className={classes.searchButton} onClick={()=> setOpen(true)}/>
                    <Badge badgeContent={4} color="warning" className={classes.badge}>
                        <Mail color="white" />
                    </Badge>
                    <Badge badgeContent={2} color="warning" className={classes.badge}>
                        <Notifications color="white" />
                    </Badge>
                    <Avatar alt="person" src="./assets/images/pexel1.jpg" />
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
