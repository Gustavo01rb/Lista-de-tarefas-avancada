import React from "react";
import EditCard from "../../../common/editCard";
import { useProfile } from "../../../../providers/profileProvider";
import AppTextField from "../../../common/textField";
import InputAvatar from "../../../common/inputAvatar";
import AppSelect from "../../../common/select";
import { GenderOptions } from "../../../helpers/selectOptions";


const FromProfile = () => {
    const {formData, user, onButtonFormPressed,onCancelFormPressed, uploadImage, changeUserData, submitFormData} = useProfile();
    return (
        <EditCard 
            title='Editar informações do perfil'
            loading={formData.loading}
            disabled={formData.disabled}
            onButtonPressed={onButtonFormPressed}
            onCancelButtonPressed={onCancelFormPressed}
            onSubmit={submitFormData}
        >
            <InputAvatar
                size={120}
                disabled={formData.disabled}
                src={user.avatar}
                setPreviewSrc={uploadImage}
            />
            <AppTextField
                title="Nome"
                placeholder="Digite seu nome*"
                required
                disabled={formData.disabled}
                value={user.name}
                onChange={(event) => changeUserData('name', event)}
            />
            <AppTextField
                title="Empresa"
                placeholder="Digite o nome da empresa que trabalha*"
                required
                disabled={formData.disabled}
                value={user.company}
                onChange={(event) => changeUserData('company', event)}
            />
            <AppTextField
                title="Aniversário"
                type="date"
                required
                disabled={formData.disabled}
                value={user.birthDate}
                onChange={(event) => changeUserData('birthDate', event)}
            />
            <AppSelect 
                title='Genêro'
                size='small'
                value={user.gender}
                disabled={formData.disabled}
                options={GenderOptions.getOptions()}   
                onChange={(event) => changeUserData('gender', event)}
            />

        </EditCard >
    );
}

export default FromProfile;