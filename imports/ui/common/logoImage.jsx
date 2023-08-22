import React from "react";
import { styled } from "@mui/system";
import {Box} from "@mui/material";

const Simg = styled('img')({
    width: '100%',
    minWidth: '200px',
    maxWidth: '1200px',
});

const AppLogoImage = ({variant = 0, ...props}) => {
    const paths = [
        '/images/logo/Horizontal_white_logo.svg'
    ]
    
    return (
        <Box {...props}>
            <Simg src ={paths[variant]} alt = 'Logo' />
        </Box>
    );
}

export default AppLogoImage;