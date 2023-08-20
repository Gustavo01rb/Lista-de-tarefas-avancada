import React, { createContext, useContext, useState } from "react";
import { Meteor } from "meteor/meteor";
import SimpleDialog from "../../client/ui/components/simpleDialog";

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

const initialState = {
    disableFields: true,
    loading: false,
};
const initialStateSimpleAlert = {
    show: false,
    onClose: () => { },
    title:'',
    message: '',
}


export const ProfileController = ({ children }) => {
    const [formData, setFormData] = useState({ ...initialState, userInfo: Meteor.user().profile, userEmail: Meteor.user().emails[0].address});
    const [simpleAlertState, setAlertState] = useState(initialStateSimpleAlert);


    const openSimpleAlert = (title, message, onClose) => {
        setAlertState({
            show: true,
            onClose: onClose,
            title: title,
            message: message,
        });
    };
    const changeUserInfo = (field, {target: {value : value} }) =>
        setFormData({
            ...formData,
            userInfo: {
                ...formData.userInfo,
                [field]: value,
            },
    });
    const changeImage = (value) => setFormData({
        ...formData,
        userInfo: {
            ...formData.userInfo,
            profileImage: value,
        },
    }) 
    const disableEdit = () => setFormData({
        ...formData,
        disableFields: true,
        userInfo: Meteor.user().profile,
    })
    const changeData = (field, value) => setFormData({
        ...formData,
        [field]: value,
    })
    const saveChangesProfile = async () => {
        Meteor.subscribe('userData');
        changeData('loading', true);
        await Meteor.call('users.updateProfile', formData.userInfo, function(error, _) {
            if (error) openSimpleAlert(
                'Erro ao atualizar informações de perfil',
                error.message,
                () => {
                    setAlertState(prevState => ({ ...prevState, show: false }));
                }
            );
            else openSimpleAlert(
                'Informações de perfil atualizadas',
                'Informações de perfil atualizadas com sucesso!',
                () => {
                    setAlertState(prevState => ({ ...prevState, show: false }));
                }
            );
        });
        changeData('loading', false);
        changeData('disableFields', true);
    }
    const contextValue = {
        ...formData,
        changeUserInfo,
        changeImage,
        changeData,
        disableEdit,
        saveChangesProfile,
        openSimpleAlert,
    };
    return (
        <>
            <ProfileContext.Provider value={ contextValue}>
                {children}
            </ProfileContext.Provider>
            <SimpleDialog 
                open={simpleAlertState.show}
                onClose={simpleAlertState.onClose}
                title={simpleAlertState.title}
                message={simpleAlertState.message}
            />
        </>
    );
};