import React from "react";
import {styled} from "@mui/system";
import {Box, Typography} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Avatar from '@mui/material/Avatar';


const SContainer = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(1),
    width: '100%',
}));

const SUserContainer = styled(Box)(({theme, title})=>({
    marginLeft: title ? theme.spacing(5) : 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(1),
    width: title ? `calc(100% - ${theme.spacing(5)})` : '100%',
    border: '1px solid #cccccc',
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
}));

const SContainerText = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

const UserCardInfo = ({userProfile, title}) => {
    const theme = useTheme();
    return (
        <SContainer theme={theme}>
            <Typography 
                variant='subtitle1' 
                fontWeight={'bold'} 
                sx={{
                    width: '100%',
                    textAlign: 'left',
                    display: title ? 'block' : 'none',
                }}
            >{title}</Typography>
            <SUserContainer theme={theme} title = {title}>
                <Avatar alt={userProfile.name} src={userProfile.avatar} sx={{width: "64px", height:"64px"}}/>
                <SContainerText theme={theme}>
                    <Typography variant='subtitle1' fontWeight={'bold'}>{userProfile.name}</Typography>
                    <Typography variant='caption'>{userProfile.company}</Typography>
                </SContainerText>
            </SUserContainer>
        </SContainer>
    );
}

export default UserCardInfo;