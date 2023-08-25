import React from "react";
import {styled} from "@mui/system";
import {Box, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import LinearProgress from '@mui/material/LinearProgress';

const SContainer = styled(Box)(({theme, height = '100vh'}) => ({
    width: '100%',
    height: height,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(2),
}));

const SImage = styled('img')(({theme}) => ({
    maxWidth: '400px',
    width: '40%',
}));

const AppLoading = ({height, title = 'Carregando...', ...props}) => {
    const theme = useTheme();
    return(
        <SContainer
            height={height}
            theme={theme}
            {...props}
        >
            <SImage src={'/images/loading.svg'} />
            <LinearProgress color='primary' sx={{width:'70%', borderRadius: theme.shape.borderRadius}}/>
            <Typography variant={'h4'}>{title}</Typography>
        </SContainer>
    )
};

export default AppLoading;