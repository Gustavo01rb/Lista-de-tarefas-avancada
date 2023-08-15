import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const Bg = styled(Box)(({ image = '/images/bg/work1.jpg', height = '100vh' }) => ({
    position: 'relative',
    backgroundImage: `url(${image})`,
    minHeight: height,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}));

const FilterOverlay = styled(Box)({
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(32, 48, 84, 0.8)',
    zIndex: 1,
});

const ChildrenWrapper = styled(Box)({
    width: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 2,
});

const BackgroundImage = ({ image, height, children }) => {
    return (
        <Bg image={image} height={height}>
            <FilterOverlay />
            <ChildrenWrapper>
                {children}
            </ChildrenWrapper>
        </Bg>
    );    
};

export default BackgroundImage;
