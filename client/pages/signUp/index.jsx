import React from "react";
import {SignUpController, useSignUp} from "../../../imports/controllers/signUpController";
import BackgroundImage from "../../ui/components/backgroundImage";
import WellcomeInfo from "./wellcomeComponent";
import { styled } from '@mui/system';
import { Box } from '@mui/system';
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

const SContainer = styled(Box)(({ isLogin }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '15px 10px',
    flexDirection: isLogin ? 'row' : 'column',
    '@media (max-width: 1150px)': {
      flexDirection: 'column',
    },
  }));
  
  const Simage = styled('img')({
    width: '20%',
    marginBottom: '15px',
    minWidth: '300px',
    maxWidth: '500px',
  });
  

const SignUp = () => {
    return (
        <SignUpController>
            <BackgroundImage>
                <Content />
            </BackgroundImage>
        </SignUpController>
    );
};

const Content = () => {
    const { isLogin } = useSignUp();
    return (
      <SContainer isLogin={isLogin}>
        {isLogin ? <WellcomeInfo /> : <Simage src="/images/logo/Horizontal_white_logo.svg" alt="Logo" />}
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </SContainer>
    );
  };

export default SignUp;