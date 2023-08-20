import React from "react";
import { Typography } from "@mui/material";
import {styled, Box} from "@mui/system";
import {useProfile} from "../../../imports/controllers/profileController";
import EditIcon from '@mui/icons-material/Edit';
import AppCardTextIcon from "../../ui/components/cardTextIcon";
import { AppLoadingButton } from "../../ui/components/buttons";
import LockIcon from '@mui/icons-material/Lock';
import DeleteIcon from '@mui/icons-material/Delete';
import AppColors from "../../ui/styles/appColors";
import AppTextField from "../../ui/components/textField";

const SContainer = styled(Box)(({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
}));

const SensitiveInfo = () => {
    const {userEmail } = useProfile();
    return (
        <SContainer>
            <Typography variant="h5" style={{alignSelf:'flex-start'}} fontWeight='bold'>Iformações sensíveis</Typography>
            <AppCardTextIcon 
                margin='30px 0 15px 0'
                icon={<EditIcon />} 
                title='Email' 
                text = {userEmail} 
                onClick={()=> console.log('edit email')} 
                
            />
            <AppLoadingButton
                startIcon={<LockIcon/>}
                backgroundColor = {AppColors.primaryDark}
                hoverColor = {AppColors.primary}
                margin='10px 0 15px 0'
                width='auto'
                padding='10px 30px'
            >
                Alterar senha
            </AppLoadingButton>
            <AppLoadingButton
                width='auto'
                padding='10px 30px'
                backgroundColor = {AppColors.error}
                hoverColor = {AppColors.error}
                startIcon={<DeleteIcon/>}
            >
                Deletar conta
            </AppLoadingButton>
        </SContainer>
    );
};

export default SensitiveInfo;