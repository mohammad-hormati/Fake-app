import React from 'react';
import { Container } from '@mui/material';
import Post from './Post';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    feedContainer: {
       paddingTop: theme.spacing(3)
    }
}))

function Feed() {

    const classes = useStyles();

    return (
        <Container className={classes.feedContainer}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </Container>
    )
}

export default Feed
