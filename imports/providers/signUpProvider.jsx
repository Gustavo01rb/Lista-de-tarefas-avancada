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
    const changeLoginFields = (field,event) => setState({...state, loginFields: {...state.loginFields, [field]: event.target.value}});

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

    const valueContext = {
        ...state,
        changeLogin,
        changeLoginFields,
        loginSubmit,
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