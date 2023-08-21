import React from "react";
import { Box, styled } from "@mui/system";
import { Typography } from "@mui/material";

const SContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '97%',
}));

const SImage = styled('img')(({
    width = '30%',
    minWidth = '300px',
    maxWidth = '600px'
}) => ({
    width: width,
    minWidth: minWidth,
    maxWidth: maxWidth
}));

const AppError = ({
    title = 'Erro',
    message = 'Ocorreu um erro inesperado!',
    ...imgProps
}) => {
    return (
        <SContainer>
            <Typography  variant="h3">{title}</Typography>
            <SImage src="/images/error.svg" alt="error" {...imgProps}/>
            <Typography variant="h5">{message}</Typography>
        </SContainer>
    );    
}


export default AppError;