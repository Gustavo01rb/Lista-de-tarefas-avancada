import React from "react";
import { styled } from '@mui/system';
import AppColors from "../styles/appColors";
import AddIcon from '@mui/icons-material/Add';

const FloatActionButtonStyle = styled('div')(({ 
    width = '50px', 
    height = '50px', 
    borderRadius = '50%', 
    backgroundColor = AppColors.primary, 
    bottom = '20px', 
    right = '20px', 
}) => ({
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: bottom,
    right: right,
    width: width,
    height: height,
    borderRadius: borderRadius,
    backgroundColor: backgroundColor,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: AppColors.primaryDark,
    },
}));

const FloatActionButton = ({ iconColor, children, onTap, ...props }) => { 
    const handleClick = () => {
        if (onTap) {
            onTap();
        }
    };

    return (
        <FloatActionButtonStyle onClick={handleClick} {...props}>
            {
                children ? children : <AddIcon sx={{
                    color: iconColor || AppColors.onPrimary,
                    fontSize: '30px',
                    alignSelf: 'center',
                }} />
            }
        </FloatActionButtonStyle>
    );
};

export default FloatActionButton;
