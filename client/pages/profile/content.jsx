import React from "react";
import {styled, Box} from "@mui/system";
import Typography from '@mui/material/Typography';
import ResponsiveColumns from "../../ui/templates/responsiveColumns/responsiveColumns";
import UserProfileInfo from "./userProfile";
import SensitiveInfo from "./sensitiveInfo";


const SContainer = styled(Box)(({
}));



const Content = () => {

    return (
        <SContainer>

            <Typography variant="h4" fontWeight='bold'>Iformações do usuário</Typography>
            <ResponsiveColumns  maxWidthColumn = '600px' paddingTop = '20px'>
                <UserProfileInfo />
                <SensitiveInfo /> 
            </ResponsiveColumns>
        </SContainer>
    );
}

export default Content;
