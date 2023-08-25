import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';

const SimpleDialog = ({ 
    open, 
    onClose, 
    title, 
    message,
    variant = '',
    buttonText = 'Fechar',
    onButtonPressed,
    cancelButton = false,
    cancelButtonText = 'Cancelar',
}) => {
    const theme = useTheme();    
    return(
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogTitle 
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: theme.spacing(1),
                    paddingLeft: theme.spacing(2),
                    color: variant === 'error' 
                    ? theme.palette.error.main 
                    : variant === 'success' 
                        ? theme.palette.success.main 
                        : variant === 'warning' 
                            ? theme.palette.warning.main : ''
                }}
            > 
                {variant === 'error' && <CancelIcon />}
                {variant === 'success' && <CheckCircleIcon />}
                {variant === 'warning' && <WarningIcon />}
                {title} 
            </DialogTitle>
            <DialogContent sx={{marginLeft: theme.spacing(3)}}>
                <DialogContentText>
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