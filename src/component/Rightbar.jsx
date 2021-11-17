import { Avatar, AvatarGroup, Container, Divider, ImageList, ImageListItem, Link, List, ListItem, ListItemText, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    rightbarContainer: {
        padding: theme.spacing(3),
        position: 'sticky',
        top: '7vh',
    },
    link : {
        padding: theme.spacing(1)
    }
}))


function Rightbar() {

    const classes = useStyles();

    return (
        <Container className={classes.rightbarContainer}>
            <Typography variant="h6" sx={{mb: 2}}>Online Friends</Typography>
            <AvatarGroup max={4} sx={{ mb: 3, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Avatar  sx={{ width: 50, height: 50 }} alt="Remy Sharp" src="./assets/images/pexel1.jpg" />
                <Avatar  sx={{ width: 50, height: 50 }} alt="Travis Howard" src="./assets/images/pexel2.jpg" />
                <Avatar  sx={{ width: 50, height: 50 }} alt="Cindy Baker" src="./assets/images/pexel3.jpg" />
                <Avatar  sx={{ width: 50, height: 50 }} alt="Agnes Walker" src="./assets/images/pexel4.jpg" />
                <Avatar  sx={{ width: 50, height: 50 }} alt="Trevor Henderson" src="./assets/images/pexel5.jpg"/>
                <Avatar  sx={{ width: 50, height: 50 }} alt="Harry kyne" src="./assets/images/pexel6.jpg" />
            </AvatarGroup>
            <Typography variant="h6">Gallery</Typography>
            <ImageList variant="masonry" cols={3} gap={8}>
                <ImageListItem>
                    <img src="./assets/images/pexel1.jpg" alt="Gallery" />
                </ImageListItem>
                <ImageListItem>
                    <img src="./assets/images/pexel2.jpg" alt="Gallery" />
                </ImageListItem>
                <ImageListItem>
                    <img src="./assets/images/pexel3.jpg" alt="Gallery" />
                </ImageListItem>
                <ImageListItem>
                    <img src="./assets/images/pexel4.jpg" alt="Gallery" />
                </ImageListItem>
                <ImageListItem>
                    <img src="./assets/images/pexel5.jpg" alt="Gallery" />
                </ImageListItem>
                <ImageListItem>
                    <img src="./assets/images/pexel6.jpg" alt="Gallery" />
                </ImageListItem>
                <ImageListItem>
                    <img src="./assets/images/pexel7.jpg" alt="Gallery" />
                </ImageListItem>
                <ImageListItem>
                    <img src="./assets/images/pexel8.jpg" alt="Gallery" />
                </ImageListItem>
            </ImageList>
            <Typography sx={{mb: 0}} variant="h6">Groups</Typography>
            <List sx={{width: '100%', bgcolor: 'background.paper',}} component="nav" aria-label="mailbox folders">
                <ListItem button>
                    <ListItemText primary="Sport" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <ListItemText primary="Movie" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Music" />
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText primary="Love" />
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText primary="Food" />
                </ListItem>
            </List>
        </Container>
    )
}

export default Rightbar
