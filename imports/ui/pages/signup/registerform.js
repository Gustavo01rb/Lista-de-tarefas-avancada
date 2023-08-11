import React from "react";
import styled from 'styled-components';
import AppGenericCard from "../../components/genericcard";
import { AppAvatar } from "../../components/avatar";
import AppTextField from "../../components/textfield";
import AppSelect from "../../components/select";
import { AppLoadingButton, AppTExtButton } from "../../components/buttons";
import { SignUpProvider, useSignUp } from "../../provider/signup";



const SContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    padding: 10px 0;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 0 22px;
    align-items: flex-start;
    min-width: 350px;
`;

const SButtonContainer = styled.div`
    width: 80%;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
`

const RegisterForm = () => {
    const signUpProvider = useSignUp();

    return (
        <AppGenericCard title={"Cadastro"}>
            <form onSubmit={signUpProvider.registerSubmit}>    
                <SContainer>
                    <Column>
                        <AppAvatar 
                            previewSrc={signUpProvider.profileImage}  
                            setPreviewSrc={(value) => signUpProvider.changeValue('profileImage', value)}
                        />
                        <AppTextField 
                            type='name' 
                            label="Nome"
                            name='name'
                            required
                        />
                        <AppSelect 
                            label="Gênero" 
                            name='genre'
                            options={['Masculino', 'Feminino', 'Outro']} 
                        />
                        
                    </Column>
                    <Column >
                        <AppTextField 
                            type='date' 
                            label="Data de aniversário" 
                            InputLabelProps={{ shrink: true }}
                            name='date'
                            required
                        />
                        <AppTextField 
                            type='name' 
                            label="Empresa"
                            name='company'
                            required
                        />
                        <AppTextField 
                            type='email' 
                            label="Email" 
                            value={signUpProvider.email} 
                            onChange={({ target: { value } }) => signUpProvider.changeValue('email',value)}
                            required
                        />
                        <AppTextField 
                            type='password' 
                            label="Senha"  
                            value={signUpProvider.password} 
                            onChange={({target:{value}}) => signUpProvider.changeValue('password', value)}
                            required
                        />
                        <AppTextField 
                            type='password' 
                            label="Confirme sua senha"
                            onChange={signUpProvider.checkPassword}
                            error={signUpProvider.erroConfirmPassword}
                            helperText={signUpProvider.erroConfirmPassword ? "As senhas não coincidem" : ""} 
                            required
                        />
                        <SButtonContainer>
                            <AppLoadingButton type="submit" loading={signUpProvider.loading}> Cadastrar </AppLoadingButton>
                            <AppTExtButton onClick={signUpProvider.changeLogin}> Voltar ao login </AppTExtButton>
                        </SButtonContainer>
                    </Column>
                </SContainer>
            </form>
        </AppGenericCard>
    );
}

export default RegisterForm;
