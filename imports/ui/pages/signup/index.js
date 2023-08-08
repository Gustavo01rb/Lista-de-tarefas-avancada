import React from "react";
import { SignUpProvider, useSignUp } from "../../provider/signup";
import BackgroundImage from "../../components/backgroundimage";
import LoginForm from "./loginform";
import RegisterForm from "./registerform";
import styled from 'styled-components';

const SContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    max-height: 100vh;
`


const SignUp = () => {   
    return (
        <SignUpProvider>
            <BackgroundImage><Content /></BackgroundImage>    
        </SignUpProvider>
    );
}

const Content = () => {
    const { isLogin } = useSignUp();
    return (
        <SContainer>
            {isLogin ? <LoginForm /> : <RegisterForm />}
        </SContainer>
    )
}




export default SignUp;