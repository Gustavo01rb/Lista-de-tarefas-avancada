import React from "react";
import { SignUpProvider, useSignUp } from "../../provider/signup";
import BackgroundImage from "../../components/backgroundimage";
import LoginForm from "./loginform";
import RegisterForm from "./registerform";
import styled from 'styled-components';

const SContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px 10px;
    flex-direction: ${props => props.isLogin ? 'row' : 'column'};
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
    width: 30%;
    margin-bottom: 30px;
    min-width: 300px;
    max-width: 500px;
`;

const SignUp = () => {   
    return (
        <SignUpProvider>
            <BackgroundImage>
                <Content />
            </BackgroundImage>    
        </SignUpProvider>
    );
}

const Content = () => {
    const { isLogin } = useSignUp();
    return (
        <SContainer isLogin={isLogin}>
            {isLogin ? <WellcomeInfo /> : <Simage src="/images/logo/Horizontal_white_logo.svg" alt="Logo" /> }
            {isLogin ? <LoginForm /> : <RegisterForm />}
        </SContainer>
    )
}

const WellcomeInfo = () => {
    return (
        <SWellcomeInfo>
            <header>
                <Simage src="/images/logo/Horizontal_white_logo.svg" alt="Company Logo" />
                <h1>Bem-vindo à nossa Plataforma de Gerenciamento de Tarefas!</h1>
            </header>
        </SWellcomeInfo>
    )
}

export default SignUp;
