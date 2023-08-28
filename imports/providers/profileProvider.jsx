import React, { createContext, useContext, useState } from "react";
import { Meteor } from "meteor/meteor";
import {useTracker} from "meteor/react-meteor-data";
import SimpleDialog from "../ui/common/simpleDialog";


const ProfileContext = createContext();
export const useProfile = () => useContext(ProfileContext);

const initialState = {
    loading: true,
    user: {},
    initialUser: {},
    formData:{
        loading: false,
        disabled: true,
    },
    emailForm:{
        loading: false,
        disabled: true,
    },
    passwordForm:{
        loading: false,
        disabled: true,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        error: false,
    }
}
const initialStateDialog = {
    show: false,
    onClose: () => { },
    title:'',
    message: '',
    confirmButton: null,
    cancelButton: false,
    variant: '',
}

export const ProfileProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    const [dialog, setDialog] = useState(initialStateDialog);


    const uploadImage = (file) => {
        setState({
            ...state,
            user:{
                ...state.user,
                avatar: file,
            }
        });
    }

    const changeUserData = (field, {target:{value}}) => {
        setState({
            ...state,
            user:{
                ...state.user,
                [field]: value,
            }
        });
    }

    const changePasswordData = ({target:{value}}) => {
        setState({
            ...state,
            passwordForm:{
                ...state.passwordForm,
                currentPassword: value,
            }
        });
    }
    const changeNewPasswordData = (field, {target:{value}}) => {
        let error = false;
        if(field === 'confirmPassword') error = value !== state.passwordForm.newPassword;
        else error = value !== state.passwordForm.confirmPassword ;
        setState({
            ...state,
            passwordForm:{
                ...state.passwordForm,
                [field]: value,
                error: error,
            }
        });
    };

    useTracker(() => {
        const user = Meteor.user();
        if(!user){
            setState({
                ...state,
                loading: true,
            });
            return;
        };
        const initialUser = {
            ...user.profile,
            email: user.emails[0].address,
        };
        setState({
            ...state,
            user: initialUser,
            initialUser: initialUser,
            loading: false,
            formData:{
                ...state.formData,
            }
        });
    }, []);

    const onButtonFormPressed = (event) => {
        event.preventDefault();
        setState({
            ...state,
            formData:{
                ...state.formData,
                disabled: false
            }
        });
    }
    const onCancelFormPressed = (event) => {
        event.preventDefault();
        setState({
            ...state,
            user: state.initialUser,
            formData:{
                ...state.formData,
                disabled: true
            }
        });
    }
    const onButtonEmailPressed = (event) => {
        event.preventDefault();
        setState({
            ...state,
            emailForm:{
                ...state.emailForm,
                disabled: false
            }
        });
    }
    const onCancelEmailPressed = (event) => {
        event.preventDefault();
        setState({
            ...state,
            user: state.initialUser,
            emailForm:{
                ...state.emailForm,
                disabled: true
            }
        });
    }
    const onButtonPasswordPressed = (event) => {
        event.preventDefault();
        setState({
            ...state,
            passwordForm:{
                ...state.passwordForm,
                disabled: false
            }
        });
    }
    const onCancelPasswordPressed = (event) => {
        event.preventDefault();
        setState({
            ...state,
            passwordForm:{
                ...state.passwordForm,
                disabled: true,
                currentPassword: '',
                newPassword: '',
                confirmPassword: '',
            }
        });
    }

    const submitFormData = (event) => {
        event.preventDefault();
        setState({
            ...state,
            formData:{
                ...state.formData,
                loading: true,
            }
        });

        Meteor.call('user.updateProfile',({
            name: state.user.name,
            company: state.user.company,
            gender: state.user.gender,
            birthDate: state.user.birthDate,
            avatar: state.user.avatar,
        }), (error) => {
            if(error){
                setDialog({
                    show: true,
                    onClose: () => setDialog(initialStateDialog),
                    title: 'Não foi possível editar o perfil',
                    message: 'Não foi possível editar seu perfil.\nPor favor, tente novamente mais tarde.' + error.message,
                    cancelButton: false,
                    variant: 'error',
                });
                return;
            }
            setDialog({
                show: true,
                onClose: () => setDialog(initialStateDialog),
                title: 'Perfil editado com sucesso',
                message: 'Seu perfil foi editado com sucesso.',
                cancelButton: false,
                variant: 'success',
            });
            setState({
                ...state,
                initialUser: state.user,
            })
        });
        setState({
            ...state,
            formData:{
                ...state.formData,
                loading: false,
                disabled: true,
            }
        });
    }
    const submitEmailData = (event) => {
        event.preventDefault();
        setState({
            ...state,
            emailForm:{
                ...state.emailForm,
                loading: true,
            }
        });
        const newEmail = event.target.email.value;
        Meteor.call('user.updateEmail',newEmail, (error) => {
            if(error){
                setDialog({
                    show: true,
                    onClose: () => setDialog(initialStateDialog),
                    title: 'Não foi possível editar o email',
                    message: 'Não foi possível editar seu email.\nPor favor, tente novamente mais tarde.' + error.message,
                    cancelButton: false,
                    variant: 'error',
                });
                return;
            }
            setDialog({
                show: true,
                onClose: () => setDialog(initialStateDialog),
                title: 'Email editado com sucesso',
                message: 'Seu email foi editado com sucesso.',
                cancelButton: false,
                variant: 'success',
            });
            setState({
                ...state,
                initialUser: state.user,
            })
        });
        setState({
            ...state,
            emailForm:{
                ...state.emailForm,
                loading: false,
                disabled: true,
            }
        });
        
    }
    const submitPasswordData = (event) => {
        event.preventDefault();
        if(state.passwordForm.error) return
        setState({
            ...state,
            passwordForm:{
                ...state.passwordForm,
                loading: true,
            }
        });
        Meteor.call('user.changePassword',({
            currentPassword : state.passwordForm.currentPassword, 
            newPassword : state.passwordForm.newPassword,
        }), (error) => {
            if(error){
                setDialog({
                    show: true,
                    onClose: () => setDialog(initialStateDialog),
                    title: 'Não foi possível editar a senha',
                    message: 'Não foi possível editar sua senha.\nPor favor, tente novamente mais tarde.' + error.message,
                    cancelButton: false,
                    variant: 'error',
                });
                return;
            }
            setDialog({
                show: true,
                onClose: () => setDialog(initialStateDialog),
                title: 'Senha editada com sucesso',
                message: 'Sua senha foi editada com sucesso.',
                cancelButton: false,
                variant: 'success',
            });
        });
        setState({
            ...state,
            passwordForm:{
                ...state.passwordForm,
                loading: false,
                disabled: true,
                currentPassword: '',
                newPassword: '',
                confirmPassword: '',
            }
        });
    }


    const contextValue = {
        ...state,
        onButtonFormPressed,
        onCancelFormPressed,
        uploadImage,
        changeUserData,
        submitFormData,
        onButtonEmailPressed,
        onCancelEmailPressed,
        submitEmailData,
        onButtonPasswordPressed,
        onCancelPasswordPressed,
        changePasswordData,
        changeNewPasswordData,
        submitPasswordData
    };
    return (
        <>
            <ProfileContext.Provider value={contextValue}>
                {children}
            </ProfileContext.Provider>
            <SimpleDialog 
                open={dialog.show}
                onClose={dialog.onClose}
                title={dialog.title}
                message={dialog.message}
                cancelButton={dialog.cancelButton}
                buttonText={dialog.buttonText}
                onButtonPressed={dialog.confirmButton ? dialog.confirmButton : null}
                variant={dialog.variant}
            />
        </>
    );
}