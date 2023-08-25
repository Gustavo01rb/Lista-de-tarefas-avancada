import React from "react";
import {styled} from "@mui/system";
import {Box, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import {StatusTaskOptions} from '../helpers/selectOptions'

const SContainer = styled(Box)(({theme, colorTheme}) => ({
    backgroundColor: colorTheme.main,
    color: colorTheme.contrastText,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: theme.spacing(2),
    minWidth: '150px',
    borderRadius: theme.shape.borderRadius,
    bodShadow: theme.shadows[4],

}));

const  CardNumberItem = ({
    number = 0,
    status
}) => {
    const theme = useTheme();
    const colorTheme = StatusTaskOptions.getColor(status);
    return(
        <SContainer theme={theme} colorTheme = {colorTheme}>
            <Typography 
                variant="h3"
                fontWeight="bold"
            >
                {number}
            </Typography>
            <Typography variant="h6">
                {status}
            </Typography>
        </SContainer>
    )
};

export default CardNumberItem;