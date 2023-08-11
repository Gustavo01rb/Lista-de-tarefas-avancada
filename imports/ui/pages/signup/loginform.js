import React from "react";
import styled from 'styled-components';
import AppTextField from "../../components/textfield";
import { AppLoadingButton, AppTExtButton } from "../../components/buttons";
import { useSignUp } from "../../provider/signup";
import AppGenericCard from "../../components/genericcard";

const SFormContainer = styled.div`
    align-self: center;
    padding: 20px 3%;
`;

const SButtonContainer = styled.div`
    width: 80%;
    padding: 15px 0;
    padding-bottom: 0px;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SSimpleText = styled.p`
    margin-top: 20px;
`;

const LoginForm = () => {
    const { email, password, changeValue, loginSubmit, loading, changeLogin } = useSignUp();

    return (
        <form onSubmit={loginSubmit}>
            <AppGenericCard title='Entrar'>
                <SFormContainer>
                    <AppTextField 
                        label="Email" 
                        type="email" 
                        value={email} 
                        onChange={({target:{value}}) => changeValue('email', value)}    
                        required
                    />
                    <AppTextField 
                        label="Senha" 
                        type="password"  
                        value={password} 
                        onChange={({target:{value}}) => changeValue('password', value)} 
                        required
                    />
                </SFormContainer>
                <SButtonContainer>
                    <AppLoadingButton type="submit" loading={loading}> Entrar </AppLoadingButton>
                    <SSimpleText>Ainda não possui conta? </SSimpleText>
                    <AppTExtButton onClick={changeLogin} > Cadastre-se </AppTExtButton>
                </SButtonContainer>
            </AppGenericCard>
        </form>
    );
};

export default LoginForm;
