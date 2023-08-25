import React from "react";
import {styled} from '@mui/system';
import {useTheme} from '@mui/material/styles';
import {Box, Typography} from '@mui/material';


const SContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: theme.spacing(2),
}));
const SImage = styled('img')(() => ({
    width: '100%',
}));

const EmptyTask = () => {
    const theme = useTheme();
    return (
        <SContainer theme={theme}>
            <SImage src="/images/EmptyTask.svg" alt="Nenhuma tarefa encontrada" />
            <Typography variant="h4" fontWeight='bold' fontFamily='cursive'>Ooops!</Typography>
            <Typography variant="h5" fontFamily='cursive'>Nenhuma tarefa por aqui.</Typography>
        </SContainer>
    );
}

export default EmptyTask;
