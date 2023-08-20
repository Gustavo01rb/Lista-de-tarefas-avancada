import React from "react";
import {styled, Box} from "@mui/system";
import { Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';


const SContainer = styled(Box)(({
    width = '100%',
    margin = 'auto',
}) => ({
    margin: margin,
    width: width,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
}));

const SContent = styled(Box)(({
    paddingLeft = '10px',
    paddingRight = 'auto',
    paddingTop = 'auto',
    paddingBottom = 'auto',
    padding = 'auto',
}) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: padding,
    paddingLeft: paddingLeft,
    paddingRight: paddingRight,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
}));



const AppCardTextIcon = ({icon, title, text, onClick, ...props}) => {
    return (
        <SContainer {...props}>
            <Typography variant="subtitle1" fontWeight='bold'>{title}</Typography>
            <SContent>
                <Typography variant="body1" >{text}</Typography>
                <IconButton onClick={onClick}>{icon}</IconButton>
            </SContent>
        </SContainer>
    )
};

export default AppCardTextIcon;