import React, { createContext, useContext, useState } from "react";
import { Meteor } from "meteor/meteor";
import { Accounts } from 'meteor/accounts-base';
import { Navigate, useNavigate } from 'react-router-dom';

const SignUpContext = createContext();

export const useSignUp = () => useContext(SignUpContext);

const initialState = {
  isLogin: true,
  loading: false,
  email: '',
  password: '',
  profileImage: null,
  erroConfirmPassword: false,
};

export const SignUpProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const changeValue = (field, value) => setFormData({ ...formData, [field]: value });

  const changeLogin = () => setFormData({ ...formData, isLogin: !formData.isLogin });

  const checkPassword = ({ target: { value } }) => {
    if (formData.password !== value) {
      setFormData({ ...formData, erroConfirmPassword: true });
      return;
    }
    setFormData({ ...formData, erroConfirmPassword: false });
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    changeValue('loading', true);

    Meteor.loginWithPassword(formData.email, formData.password, (err) => {
      if (err) {
        alert(err.reason);
        changeValue('loading', false);
      } else {
        changeValue('loading', false);
        navigate('/home');
      }
    });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    if (formData.erroConfirmPassword) return;

    changeValue('loading', true);

    try {
      Accounts.createUser({
        email: formData.email,
        password: formData.password,
        profile: {
          name: e.target.name.value,
          genre: e.target.genre.value,
          date: e.target.date.value,
          company: e.target.company.value,
          profileImage: formData.profileImage,
        }
      });

      changeValue('loading', false);
      navigate('/home');
    } catch (error) {
      changeValue('loading', false);
      alert('Ocorreu um erro ao registrar o usuário. Por favor, tente novamente.');
    }
  };

  const contextValue = {
    ...formData,
    changeValue,
    checkPassword,
    loginSubmit,
    registerSubmit,
    changeLogin,
  };

  return (
    <SignUpContext.Provider value={contextValue}>
      {children}
    </SignUpContext.Provider>
  );
};

export default SignUpProvider;
