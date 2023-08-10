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
    padding-top: 30px;
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
            <SContainer>
                <Column>
                    <AppAvatar 
                        previewSrc={signUpProvider.profileImage}  
                        setPreviewSrc={signUpProvider.changeProfileImage}
                    />
                    <AppTextField 
                        type='name' 
                        label="Nome"
                        value={signUpProvider.nameValue}
                        onChange={signUpProvider.changeNameValue} 
                    />
                    <AppTextField 
                        type='date' 
                        label="Data de aniversário" 
                        InputLabelProps={{ shrink: true }}
                        value={signUpProvider.dateValue}
                        onChange={signUpProvider.changeDateValue}
                    />
                    <AppTextField 
                        type='name' 
                        label="Empresa"
                        value={signUpProvider.companyValue}
                        onChange={signUpProvider.changeCompanyValue} 
                    />
                </Column>
                <Column >
                    <AppTextField 
                        type='email' 
                        label="Email" 
                        value={signUpProvider.emailValue} 
                        onChange={signUpProvider.changeEmailValue}
                    />
                    <AppTextField 
                        type='password' 
                        label="Senha"  
                        value={signUpProvider.passwordValue} 
                        onChange={signUpProvider.changePasswordValue}
                    />
                    <AppTextField 
                        type='password' 
                        label="Confirme sua senha"
                        value={signUpProvider.confirmPasswordValue}
                        onChange={signUpProvider.changeConfirmPasswordValue}
                        error={signUpProvider.erroConfrimPassword}
                        helperText={signUpProvider.erroConfrimPassword ? "As senhas não coincidem" : ""} 
                    />
                    <AppSelect 
                        label="Gênero" 
                        options={['Masculino', 'Feminino', 'Outro']} 
                        value={signUpProvider.genreValue}
                        onChange={signUpProvider.changeGenreValue}
                    />
                    <SButtonContainer>
                        <AppLoadingButton type="submit" loading={signUpProvider.loading}> Cadastrar </AppLoadingButton>
                        <AppTExtButton onClick={signUpProvider.changeLogin}> Voltar ao login </AppTExtButton>
                    </SButtonContainer>
                </Column>
            </SContainer>
        </AppGenericCard>
    );
}

export default RegisterForm;
