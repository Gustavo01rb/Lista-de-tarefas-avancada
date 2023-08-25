import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import {useTheme} from '@mui/material/styles';
import {StatusTaskOptions} from '../../../helpers/selectOptions';
import { useEditTask } from "../../../../providers/editTaskProvider";

const SFixedAux = styled(Box)(({theme}) => ({
    width: '45%',
    height: '100vh',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    }
}));

const SContainer = styled(Box)(({theme, themecolor}) => ({
    width : '43%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    top: 0,
    left: 0,
    padding: theme.spacing(5),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(10),
    backgroundColor: themecolor.main,
    color: themecolor.contrastText,
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
    const {dataTask} = useEditTask();
    const statusOptions = () => {
        switch(dataTask.status){
            case StatusTaskOptions.notStarted:
                return {
                    image: '/images/notStarted.svg',
                    text: 'Essa tarefa ainda não foi iniciada.',
                    themeColor: theme.palette.notStartedTask,
                };
            case StatusTaskOptions.inProgress:
                return {
                    image: '/images/inProgress.svg',
                    text: 'Essa tarefa está em andamento.',
                    themeColor: theme.palette.inProgressTask,
                };
            case StatusTaskOptions.done:
                return {
                    image: '/images/done.svg',
                    text: 'Obaa!!\nEssa tarefa já foi concluída.',
                    themeColor: theme.palette.finishedTask,
                };
        }
    }
    return (
        <SFixedAux theme={theme}>
        <SContainer theme={theme} themecolor={statusOptions().themeColor}>
            <SImage src={statusOptions().image} />
            <Typography 
                fontFamily= 'cursive'
                variant="h5"
                fontWeight='bold'
                color = 'secondary'
                textAlign={'center'}
            >
                {statusOptions().text}
            </Typography>
        </SContainer>
        </SFixedAux>
    );
};

export default DecImage;