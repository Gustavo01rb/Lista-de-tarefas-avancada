import React from "react";
import {styled} from "@mui/system";
import {Box} from "@mui/material";
import Typography from '@mui/material/Typography';

const SContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
});
const SImage = styled('img')({
    width: '60px',
    height: '60px',
    marginRight: '10px'
});

const AppLogoIconTitle = ({
    variant = 0,
    title,
    ...props
}) => {
    return (
        <SContainer {...props}>
            <SImage src='/images/logo/Icon_black.svg' />
            <Typography variant='h4' fontWeight={'bold'}>{title}</Typography>
        </SContainer>
    );
}

export default AppLogoIconTitle;