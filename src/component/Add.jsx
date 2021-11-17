import React, {forwardRef, useState} from 'react';
import { makeStyles } from '@mui/styles';
import { Alert, Button, Container, Fab, FormControl, FormControlLabel, FormLabel, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed !important',
        bottom: 20,
        right: 20,
    },
    container: {
        width: '55vw !important',
        height: '65%',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: 'auto',
        backgroundColor: 'white',
        [theme.breakpoints.down('sm')]: {
            width: '100vw !important',
            height: '100vh',
        }
    },
    form:{
        padding: theme.spacing(2),
    },
    item: {
        marginBottom: theme.spacing(3),
    }
}));


function Add() {

    const [open, setOpen] = useState(false);
    const [openSnack, setOpenSnack] = useState(false)
    const classes = useStyles();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
        setOpenSnack(false);
      };

      const handleCreate = () => {
          setOpenSnack(true);
          setOpen(false);
      }

    return (
        <>
        <Tooltip title="Add" aria-label="add" onClick={()=> setOpen(true)} >
            <Fab color="primary" className={classes.fab}>
                <AddIcon />
            </Fab>
        </Tooltip>
        <Modal open={open} className={classes.modal} >
            <Container className={classes.container}>
                <form className={classes.form} autoComplete="off">
                    <div className={classes.item}>
                        <TextField label="Title" variant="outlined" size="small" style={{width: '100%'}}/>
                    </div>
                    <div className={classes.item}>
                        <TextField label="Description..." variant="outlined" size="small" multiline rows={4} style={{width: '100%'}}/>
                    </div>
                    <div className={classes.item}>
                        <TextField
                            select
                            label="visibility"
                            helperText="Please select your visibility"
                            value="Public"
                            >
                                <MenuItem value="Public">Public</MenuItem>
                                <MenuItem value="private">private</MenuItem>
                                <MenuItem value="Unlisted">Unlisted</MenuItem>
                        </TextField>
                    </div>
                    <div className={classes.item}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Who can comment ?</FormLabel>
                            <RadioGroup defaultValue="female">
                                <FormControlLabel value="Everyboy" control={<Radio />} label="Everyboy" />
                                <FormControlLabel value="My Friends" control={<Radio />} label="My Friends" />
                                <FormControlLabel value="Nobody" control={<Radio />} label="Nobody" />
                                <FormControlLabel
                                value="disabled"
                                disabled
                                control={<Radio />}
                                label="Custom (Premium)"
                                />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className={classes.item}>
                        <Button variant="outlined" color="primary" style={{marginRight: 20}} onClick={handleCreate}>CREATE</Button>
                        <Button variant="outlined" color="secondary" onClick={()=> setOpen(false)}>CANCLE</Button>
                    </div>
                </form>
            </Container>
        </Modal>
        <Snackbar open={openSnack} autoHideDuration={4000} onClose={() => setOpenSnack(false)}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            This is a success message!
            </Alert>
        </Snackbar>
        </>
    )
}

export default Add
