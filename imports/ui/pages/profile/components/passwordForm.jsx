import React from "react";
import EditCard from "../../../common/editCard";
import { useProfile } from "../../../../providers/profileProvider";
import AppTextField from "../../../common/textField";

const PasswordForm = () => {
    const {passwordForm, onButtonPasswordPressed, onCancelPasswordPressed, changePasswordData,changeNewPasswordData,submitPasswordData} = useProfile();
    return (
        <EditCard 
            title='Editar senha'
            outilined={true}
            loading={passwordForm.loading}
            disabled={passwordForm.disabled}
            onButtonPressed={onButtonPasswordPressed}
            onSubmit={submitPasswordData}
            onCancelButtonPressed={onCancelPasswordPressed}
        >
            <AppTextField 
                title='Senha atual'
                type='password'
                value={passwordForm.currentPassword}
                disabled={passwordForm.disabled}
                onChange={changePasswordData}
            />
            <AppTextField 
                title='Nova senha'
                type='password'
                value={passwordForm.newPassword}
                disabled={passwordForm.disabled}
                onChange={(event) => changeNewPasswordData('newPassword',event)}
            />
            <AppTextField 
                title='Confirme a nova senha'
                type='password'
                value={passwordForm.confirmPassword}
                disabled={passwordForm.disabled}
                error={passwordForm.error}
                helperText={passwordForm.error ? 'As senhas não coincidem' : ''}
                onChange={(event) => changeNewPasswordData('confirmPassword',event)}
            />
        </EditCard>
    )
}

export default PasswordForm;
