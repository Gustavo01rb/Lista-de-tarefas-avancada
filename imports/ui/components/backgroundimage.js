import React from "react";
import styled from "styled-components";

const Bg = styled.div`
    position: relative;
    background-image: ${props => `url(${props.image || '/images/bg/work1.jpg'})`};
    min-height: ${props => props.height || '100vh'};
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; 
`;

const FilterOverlay = styled.div`
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(32, 48, 84, 0.8);
    z-index: 1; 
`;

const ChildrenWrapper = styled.div`
    position: relative;
    z-index: 2; 
`;

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
