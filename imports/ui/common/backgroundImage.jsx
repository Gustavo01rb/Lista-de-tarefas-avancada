import React from "react";
import {styled} from "@mui/system";
import { Box } from "@mui/material";

const SContainer = styled(Box)(({
    height, width, imagepath
})=>({
    width: width,
    minHeight: height,
    backgroundImage: `url(${imagepath})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
}));

const SFilter = styled(Box)(({
    width, filter
}) => ({
    minHeight: '100vh',
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    backgroundColor: filter,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}));

const AppBackgroundImage = ({
    imagepath = '/images/bg/work1.jpg',
    height = '100vh',
    width = '100%',
    filter = 'rgba(32, 48, 84, 0.8)',
    children
}) => {
    return (
        <SContainer
            height={height}
            width={width}
            imagepath={imagepath}
        >
            <SFilter
                width={width}
                filter={filter}
            >
                {children}
            </SFilter>
        </SContainer>
    );
}

export default AppBackgroundImage;