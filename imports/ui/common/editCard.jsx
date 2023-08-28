import React from "react";
import {styled} from "@mui/system";
import {Box, Typography, Button} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import AppLoadingButton from "./loadingButton";
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

const SContainer = styled(Box)(({theme, outilined}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: theme.spacing(3),
    transition: '0.3s',
    width: '100%',
    padding: outilined ? theme.spacing(2) : 0,
    border: outilined ? `1px solid #000` : 'none',
    borderRadius: outilined ? theme.shape.borderRadius : 0,
    
}));
const SButtonContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
    transition: '0.3s',
}));
const SFormContainer = styled('form')(({theme}) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(2),
    transition: '0.3s',

}));

const EditCard = ({
    title,
    onSubmit,
    disabled,
    onButtonPressed,
    onCancelButtonPressed,
    loading,
    children,
    outilined,
}) => {
    const theme = useTheme();
    return (
        <SContainer theme={theme} outilined={outilined}>
            <Typography variant="h5">{title}</Typography>
                <SFormContainer onSubmit={onSubmit} theme={theme}>
                    {children}
                    <SButtonContainer theme={theme}>
                        {!disabled && 
                            <Button
                                color="error"
                                startIcon={<CancelIcon />}
                                onClick={onCancelButtonPressed}
                            >
                                Cancelar
                            </Button>
                        }
                        <AppLoadingButton
                            type = {disabled ? 'button' : 'submit'} 
                            loading={loading}
                            onClick={disabled ? onButtonPressed : null}
                            startIcon={disabled ? <EditIcon /> : <SaveIcon />}                                             
                        >
                            {disabled ? 'Editar' : 'Salvar'}
                        </AppLoadingButton>
                    </SButtonContainer>
                </SFormContainer>
        </SContainer>
    );
}

export default EditCard;