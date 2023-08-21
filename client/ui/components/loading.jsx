import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { styled, Box } from "@mui/system";
import { Typography } from "@mui/material";

const SContainer = styled(Box)(({absoluteCenter}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: absoluteCenter ? 'absolute' : 'relative',
    top: absoluteCenter ? '50%' : 'auto',
    left: absoluteCenter ? '50%' : 'auto',
    transform: absoluteCenter ? 'translate(-50%, -50%)' : 'none'

}));


const AppLoading = ({
    text = 'Carregando...',
    size = '60px',
    textVariant = 'h5',
    abosotuteCenter = false
}) => {
    return (
        <SContainer absoluteCenter={abosotuteCenter}>
            <CircularProgress size={size} />
            <Typography variant={textVariant} marginTop={'30px'}>{text}</Typography>
        </SContainer>
    );
}


export default AppLoading;