import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(5),
    },
    image: {
        height: '450px',
        [theme.breakpoints.down('sm')]: {
            height: 200,
        }
    },
}))


function Post() {
    
    const classes = useStyles();

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia 
            className={classes.image}
            component="img"
            height="250"
            image="./assets/images/post.jpg"
            alt="post"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              My First Post
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, accusamus minima dolorum eius nesciunt quidem deserunt impedit itaque a adipisci unde. Porro assumenda reiciendis nemo ex delectus! Iusto, excepturi consequuntur!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
            <Button>SHARE</Button>
            <Button>LEARN MORE</Button>
        </CardActions>
      </Card>
    )
}

export default Post
