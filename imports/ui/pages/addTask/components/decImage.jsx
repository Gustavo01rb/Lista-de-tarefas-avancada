import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import {useTheme} from '@mui/material/styles';

const SFixedAux = styled(Box)(({theme}) => ({
    width: '45%',
    height: '100vh',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    }
}));

const SContainer = styled(Box)(({theme}) => ({
    width : '43%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    top: 0,
    left: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(10),
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.down('md')]: {
        display: 'none',
    }
}));
const SImage = styled('img')({
    width : '100%',
    maxHeight: '60vh'

});

const DecImage = () => {
    const theme = useTheme();
    return (
        <SFixedAux theme={theme}>
        <SContainer theme={theme}>
            <SImage src="/images/AddTaskImage.svg" />
            <Typography 
                fontFamily= 'cursive'
                variant="h5"
                fontWeight='bold'
                color = 'secondary'
                textAlign={'center'}
            >
                Um jeito simples de organizar suas tarefas
            </Typography>
        </SContainer>
        </SFixedAux>
    );
};

export default DecImage;