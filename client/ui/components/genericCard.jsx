import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import AppColors from "../styles/appColors";

const SContainer = styled(Box)(({ 
    backgroundColor = AppColors.onPrimary, 
    padding = '1% 2%', 
    borderRadius = '10px', 
    border = '2px solid ' + AppColors.black
}) => ({
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
    webkitBoxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
    mozBoxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
    border: border,
    backgroundColor: backgroundColor,
    padding: padding,
    borderRadius: borderRadius,
}));

const STitle = styled('h1')(({ titleFontSize, titleMarginTop }) => ({
    fontSize: titleFontSize,
    marginTop: titleMarginTop,
    textAlign: 'center',
}));

const AppGenericCard = ({ children, title, ...props }) => {
    return (
        <SContainer {...props}>
            {title && <STitle {...props}>{title}</STitle>}
            {children}
        </SContainer>
    );
};

export default AppGenericCard;
