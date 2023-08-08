import React from "react";
import styled from "styled-components";

const Bg = styled.div`
    position: relative;
    background-image: ${props => `url(${props.image || '/images/bg/office1.svg'})`};
    min-height: ${props => props.height || '100vh'};
    min-width: ${props => props.width || '100vw'};
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
    background-color: rgba(21, 118, 163, 0.3);
    z-index: 1; 
`;

const ChildrenWrapper = styled.div`
    position: relative;
    z-index: 2; 
`;

const BackgroundImage = ({ image, height, width, children }) => {
    return (
        <Bg image={image} height={height} width={width}>
            <FilterOverlay />
            <ChildrenWrapper>
                {children}
            </ChildrenWrapper>
        </Bg>
    );    
};

export default BackgroundImage;
