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
    padding: 0 4%;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const SWellcomeInfo = styled.div`
    width: 90%;
    max-width: 650px;
    min-width: 300px;
    margin-right: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    text-align: center;
    font-size: 1.1rem;
    @media (max-width: 768px) {
        width: 100%;
        min-width: 200px;
        margin-bottom: 30px;
    }
`;
const Simage = styled.img`
    width: 80%;
    margin-bottom: 30px;
`;

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
            <WellcomeInfo />
            {isLogin ? <LoginForm /> : <RegisterForm />}
        </SContainer>
    )
}

const WellcomeInfo = () => {
    return (
        <SWellcomeInfo>
            <Simage src="/images/logo/Horizontal_white_logo.svg" alt="Logo" />
            <h1>Bem-vindo à nossa Plataforma de Gerenciamento de Tarefas!</h1>
            
        </SWellcomeInfo>
    )
}



export default SignUp;