import React from "react";
import {styled, Box} from "@mui/system";
import { AppAvatar } from "../../ui/components/avatar";
import {useProfile} from "../../../imports/controllers/profileController";
import AppTextField from "../../ui/components/textField";
import AppSelect from "../../ui/components/select";
import { AppLoadingButton } from "../../ui/components/buttons";
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import AppColors from "../../ui/styles/appColors";
import CancelIcon from '@mui/icons-material/Cancel';

const SContainerButtonEdit = styled(Box)(({
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
}));



const UserProfileInfo = () => {
    const {disableFields, userInfo, changeUserInfo, changeImage, changeData, disableEdit, saveChangesProfile, loading} = useProfile();

    return (
        <>
            <AppAvatar 
                    previewSrc={userInfo.profileImage}   
                    setPreviewSrc={(value) => changeImage(value)}
                    disabled={disableFields}
                />
                <AppTextField 
                    label="Nome"
                    name="name"
                    value={userInfo.name}
                    onChange={disableFields ? null : (value) => changeUserInfo('name', value)}
                />
                <AppTextField 
                    label="Empresa"
                    name="company"
                    value={userInfo.company}  
                    onChange={disableFields ? null :(value) => changeUserInfo('company', value)}
                />
                <AppTextField 
                    label="Aniversário"
                    name="data"
                    value={userInfo.date}
                    type="date"
                    onChange={disableFields ? null :(value) => changeUserInfo('date', value)}
                />
                <AppSelect 
                    label="Gênero" 
                    name='genre'
                    value={userInfo.genre}
                    options={['Masculino', 'Feminino', 'Outro']} 
                    onChange={disableFields ? null :(value) => changeUserInfo('genre', value)}
                />
                <SContainerButtonEdit>
                    {
                        disableFields ? null : 
                        <AppLoadingButton 
                            margin = {'30px 10px'} 
                            width = {'auto'}
                            startIcon={<CancelIcon/>}
                            backgroundColor = {AppColors.error}
                            hoverColor = {AppColors.error}
                            onClick={() => {disableEdit()}}
                        >
                            Cancelar  
                        </AppLoadingButton>
                    }
                    <AppLoadingButton 
                        margin = {'30px 5px'} 
                        width = {'auto'}
                        loading={loading}
                        startIcon={disableFields ? <EditIcon/> : <SaveIcon/>}
                        backgroundColor = {disableFields || AppColors.success}
                        hoverColor = {disableFields || AppColors.success}
                        onClick={() => {disableFields ? changeData('disableFields', false) : saveChangesProfile()}}
                    >
                        {disableFields ? 'Editar' : 'Salvar'}  
                    </AppLoadingButton>
                </SContainerButtonEdit>
        </>
    )
}


export default UserProfileInfo;