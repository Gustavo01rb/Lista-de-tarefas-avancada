import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AppLoadingButton, AppTExtButton } from "./buttons";


const AppFormDialog = ({
    open, 
    onClose, 
    onSubmit, 
    title, 
    content, 
    forms, 
    cancelText = 'Cancelar',
    submitText = 'Salvar',
    ...props}
) => {
    return (
        <Dialog open={open} onClose={onClose} {...props}>
            <DialogTitle>{title}</DialogTitle>
            <form onSubmit={onSubmit}>
                <DialogContent>
                    <DialogContentText>{content}</DialogContentText>
                    {forms}
                </DialogContent>
                <DialogActions>
                    <AppTExtButton onClick={onClose}>{cancelText}</AppTExtButton>
                    <AppLoadingButton type="submit">{submitText}</AppLoadingButton>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default AppFormDialog;