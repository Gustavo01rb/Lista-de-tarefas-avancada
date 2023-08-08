import React, {createContext, useContext, useState} from "react";

const SignUpContext = createContext();

export const useSignUp = () => useContext(SignUpContext);

export const SignUpProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(true);

    const changeLogin = () => setIsLogin(!isLogin);
    
    return (
        <SignUpContext.Provider value={{
            isLogin,
            changeLogin
        }}>
            {children}
        </SignUpContext.Provider>
    );   
}