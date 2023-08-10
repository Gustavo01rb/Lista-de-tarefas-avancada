import React from "react";
import styled from 'styled-components';

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.backgroundColor};
    padding: ${props => props.padding};
    border-radius: ${props => props.borderRadius}px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    border: ${props => props.border};
`;

const STitle = styled.h1`
    font-size: ${props => props.titleFontSize};
    margin-top: ${props => props.titleMarginTop};
    text-align: center;
`;

const AppGenericCard = ({ children, title, ...props }) => {
    return (
        <SContainer {...props}>
            {title && <STitle {...props}>{title}</STitle>}
            {children}
        </SContainer>
    );
};

AppGenericCard.defaultProps = {
    backgroundColor: "#ffffff",
    padding: "1% 2%",
    borderRadius: 10,
    border: "2px solid #000000",
    titleFontSize: "1.7rem",
    titleMarginTop: "20px",
};

export default AppGenericCard;
