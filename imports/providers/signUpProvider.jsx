import React, { createContext, useContext, useState } from "react";
import { Meteor } from "meteor/meteor";
import { Accounts } from 'meteor/accounts-base';
import { useNavigate } from 'react-router-dom';
import SimpleDialog from "../ui/common/simpleDialog";

const SignUpContext = createContext();
export const useSignUp = () => useContext(SignUpContext);

const initialState = {
    isLogin : true,
    loading: false,
    loginFields: {
        email: '',
        password: '',
    },
    regiterFields: {
        avatar: null,
        errorConfirmPassword: false,
    }
}
const initialStateDialog = {
    show: false,
    onClose: () => { },
    title:'',
    message: '',
}

export const SignUpProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    const [dialog, setDialog] = useState(initialStateDialog);
    const navigate = useNavigate();

    const changeLogin = () => setState({...state, isLogin: !state.isLogin});
    const changeLoginFields = (field,{target : {value}}) => setState({...state, loginFields: {...state.loginFields, [field]: value}});
    const uploadAvatar = (value) => setState({...state, regiterFields: {...state.regiterFields, avatar: value}});
    const checkPassword = ({target : {value}}) => {
        const {password} = state.loginFields;
        if(password !== value){
            setState({...state, regiterFields: {...state.regiterFields, errorConfirmPassword: true}});
            return
        }
        setState({...state, regiterFields: {...state.regiterFields, errorConfirmPassword: false}});
    }

    const openDialog = ({title, message, onClose}) => {
        setDialog({...dialog, show: true, title, message, onClose});
    };

    const loginSubmit = (event) => {
        event.preventDefault();
        const {email, password} = state.loginFields;
        setState({...state, loading: true});
        Meteor.loginWithPassword(email, password, (err) => {
            if(err){
                openDialog({
                    title: 'Erro ao entrar',
                    message: err.reason,
                    onClose: () => setDialog(initialStateDialog),
                });
            }else{
                navigate('/');
            }
        });
        setState({...state, loading: false});

    }
    const registerSubmit = (event) => {
        event.preventDefault();
        
        if(state.regiterFields.errorConfirmPassword){
            openDialog({
                title: 'Erro ao cadastrar',
                message: 'As senhas não coincidem',
                onClose: () => setDialog(initialStateDialog),
            });
            return;
        }
        const {avatar} = state.regiterFields;
        const {email, password} = state.loginFields;
        setState({...state, loading: true});
        Accounts.createUser({email, password, profile: {
            name: event.target.name.value,
            gender: event.target.gender.value,
            birthDate: event.target.birthDate.value,
            company: event.target.company.value,
            avatar: avatar
        }}, (err) => {
            if(err){
                openDialog({
                    title: 'Erro ao cadastrar',
                    message: err.reason,
                    onClose: () => setDialog(initialStateDialog),
                });
            }else{
                Meteor.loginWithPassword(email, password);
                navigate('/');
            }
        });


    }

    const valueContext = {
        ...state,
        changeLogin,
        changeLoginFields,
        loginSubmit,
        checkPassword,
        uploadAvatar,
        registerSubmit
    }
    
    return (
        <>
            <SignUpContext.Provider value={valueContext}>
                {children}
            </SignUpContext.Provider>
            <SimpleDialog
                open={dialog.show}
                onClose={dialog.onClose}
                title={dialog.title}
                message={dialog.message}
                variant="error"
            />
        </>
    );
};