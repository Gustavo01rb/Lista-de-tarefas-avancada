import React, { createContext, useContext, useState } from "react";
import { Meteor } from "meteor/meteor";
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';

const SignUpContext = createContext();

export const useSignUp = () => useContext(SignUpContext);

export const SignUpProvider = ({ children }) => {
  //Variáveis de estado
  const [isLogin, setIsLogin]                           = useState(true);
  const [loading, setLoading]                           = useState(false);
  const [emailValue, setEmailValue]                     = useState('');
  const [passwordValue, setPasswordValue]               = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
  const [nameValue, setNameValue]                       = useState('');
  const [companyValue, setCompanyValue]                 = useState('');
  const [genreValue, setGenreValue]                     = useState('');
  const [dateValue, setDateValue]                       = useState('');
  const [profileImage, setProfileImage]                 = useState(null);

  //Variáveis de erro
  const [erroConfrimPassword, setErroConfrimPassword] = useState(false);
  const [errorAlertOpen, setErrorAlertOpen]           = useState(false);

  //Funções de mudança de estado
  const changeLogin                = () => setIsLogin(!isLogin);
  const changeEmailValue           = (value) => setEmailValue(value.target.value);
  const changePasswordValue        = (value) => setPasswordValue(value.target.value);
  const changeConfirmPasswordValue = (value) =>{
    setConfirmPasswordValue(value.target.value);
    if(passwordValue !== value.target.value){
      setErroConfrimPassword(true);
      return;
    }
    setErroConfrimPassword(false);
  };
  const changeNameValue    = (value) => setNameValue(value.target.value);
  const changeCompanyValue = (value) => setCompanyValue(value.target.value);
  const changeGenreValue   = (value) => setGenreValue(value.target.value);
  const changeDateValue    = (value) => setDateValue(value.target.value);
  const changeProfileImage = (value) => setProfileImage(value);

  const handleAlertClose = () => {
    setErrorAlertOpen(false);
    setLoading(false); 
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    Meteor.loginWithPassword(emailValue, passwordValue, (err) => {
      if (err) {
        setErrorAlertOpen(true);
        setLoading(false);
        return;
      }
      setLoading(false);
    });
  };

  return (
    <SignUpContext.Provider
      value={{
        isLogin,
        changeLogin,
        loading,
        emailValue,
        changeEmailValue,
        passwordValue,
        changePasswordValue,
        confirmPasswordValue,
        changeConfirmPasswordValue,
        erroConfrimPassword,
        nameValue,
        changeNameValue,
        companyValue,
        changeCompanyValue,
        genreValue,
        changeGenreValue,
        dateValue,
        changeDateValue,
        changeProfileImage,profileImage,
        loginSubmit
      }}
    >
      {children}
      <Snackbar open={errorAlertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
        <MuiAlert onClose={handleAlertClose} severity="warning" sx={{ width: '100%' }}>
          Ocorreu um erro durante o login. Por favor, verifique suas credenciais.
        </MuiAlert>
      </Snackbar>
    </SignUpContext.Provider>
  );
};
