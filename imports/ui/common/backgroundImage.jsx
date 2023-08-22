import React from "react";
import {styled} from "@mui/system";
import { Box } from "@mui/material";

const SContainer = styled(Box)(({
    height, width, imagepath
})=>({
    height: height,
    width: width,
    backgroundImage: `url(${imagepath})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
}));

const SFilter = styled(Box)(({
    width, height, filter
}) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    backgroundColor: filter,
    zIndex: 1,
}));

const SContent = styled(Box)(({}) => ({
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: 2,
}));

const AppBackgroundImage = ({
    imagepath = '/images/bg/work1.jpg',
    height = '100vh',
    width = '100vw',
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
                height={height}
                width={width}
                filter={filter}
            />
            <SContent>
                {children}
            </SContent>
        </SContainer>
    );
}

export default AppBackgroundImage;