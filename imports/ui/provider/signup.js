import React, {createContext, useContext, useState} from "react";

const SignUpContext = createContext();

export const useSignUp = () => useContext(SignUpContext);

export const SignUpProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState(''); 



    const changeLogin = () => setIsLogin(!isLogin);
    const changeEmailValue = (value) => setEmailValue(value.target.value);
    const changePasswordValue = (value) => setPasswordValue(value.target.value);
    const loginSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <SignUpContext.Provider value={{
            isLogin,
            changeLogin,
            loading,
            emailValue,
            changeEmailValue,
            passwordValue,
            changePasswordValue,

            loginSubmit
        }}>
            {children}
        </SignUpContext.Provider>
    );   
}