import React from "react";
import { styled } from "@mui/system";
import {Box} from "@mui/material";

const SContainer = styled(Box)(({}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const Simg = styled('img')(({
    minwidth = '200px',
    maxwidth = '1000px',
})=>({
    width: '100%',
    minWidth: minwidth,
    maxWidth: maxwidth,
    height:"100%"
}));

const AppLogoImage = ({variant = 0, minwidth, maxwidth, ...props}) => {
    const paths = [
        '/images/logo/Horizontal_white_logo.svg',
        '/images/logo/Horizontal_black_logo.svg'
    ]
    
    return (
        <SContainer {...props}>
            <Simg src ={paths[variant]} minwidth ={minwidth} maxwidth={maxwidth} alt = 'Logo' />
        </SContainer>
    );
}

export default AppLogoImage;