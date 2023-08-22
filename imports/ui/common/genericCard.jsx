import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const SContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
    padding: `${theme.spacing(4)} ${theme.spacing(5)}`,
    boxShadow: theme.shadows[3],
    border: `1px solid black`,
    width: '100%',
}));

const AppGenericCard = ({ children, title, spacing = 4, ...props }) => {
    const theme = useTheme();
    return (
        <SContainer theme={theme} {...props}>
            {title && <Typography variant="h4" fontWeight='bold' > {title} </Typography>}
            {title && <Box mt={spacing} />}
            {children}
        </SContainer>
    );
};

export default AppGenericCard;