import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from "@mui/material";

const SimpleDialog = ({ 
    open, 
    onClose, 
    title, 
    message,
    buttonText = 'Fechar',
    onButtonPressed,
    cancelButton = false,
    cancelButtonText = 'Cancelar',
}) => {
    return(
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title"> {title} </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {cancelButton && <Button variant="text" onClick={onClose} autoFocus>
                    <Typography variant="button">{cancelButtonText}</Typography>
                </Button>
                }
                <Button variant={cancelButton ? 'contained' : 'text'} onClick={onButtonPressed ? onButtonPressed : onClose} autoFocus>
                    <Typography variant="button">{buttonText}</Typography>
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default SimpleDialog;