import React from 'react'; 
import EditCard from "../../../common/editCard";
import { useProfile } from "../../../../providers/profileProvider";
import AppTextField from "../../../common/textField";

const EmailForm = () => {
    const {user, emailForm, onButtonEmailPressed, onCancelEmailPressed, submitEmailData} = useProfile();
    return (
        <EditCard 
            title='Editar email'
            loading={emailForm.loading}
            disabled={emailForm.disabled}
            outilined={true}
            onButtonPressed={onButtonEmailPressed}
            onCancelButtonPressed={onCancelEmailPressed}
            onSubmit={submitEmailData}
        >
            <AppTextField
                title="Email atual"
                disabled={true}
                value={user.email}
            />
            {!emailForm.disabled && <AppTextField 
                title='Novo email'
                name='email'
                placeholder='Digite seu novo email'
            />}

        </EditCard>
    );
};

export default EmailForm;