import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import {Box, Typography} from "@mui/material";
import {styled} from "@mui/system";

const SContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '15px 0',

});
const STextContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: '10px',
});



const AppCheckBox = ({title, subtitle, ...props}) => {
    return (
        <SContainer>
            <Checkbox
                sx={{
                    margin: 0,
                    padding: 0,
                    boxSizing: 'border-box',
                }}
                {...props}

            />
            <STextContainer>
                <Typography variant="body1">{title}</Typography>
                <Typography variant="caption">{subtitle}</Typography>
            </STextContainer>
        </SContainer>
    );
}

export default AppCheckBox;