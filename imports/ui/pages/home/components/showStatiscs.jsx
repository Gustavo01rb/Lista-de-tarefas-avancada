import React from "react";
import {styled} from "@mui/system";
import {Box, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";

const SContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
}));

const SContainerContent = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing(2),
    paddingLeft: theme.spacing(4),
}));

const ShowStatistics = ({
    title,
    children
}) => {
    const theme = useTheme();
    return (
        <SContainer theme={theme}>
            <Typography 
                variant='h5'
                fontWeight='bold'
            >{title}</Typography>
            <SContainerContent theme={theme}>
                {children}
            </SContainerContent>
        </SContainer>
    );
}

export default ShowStatistics;