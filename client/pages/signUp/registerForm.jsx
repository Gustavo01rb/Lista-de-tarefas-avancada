import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/system";
import AppGenericCard from "../../ui/components/genericCard";
import AppTextField from "../../ui/components/textField";
import AppSelect from "../../ui/components/select";
import { AppLoadingButton, AppTExtButton } from "../../ui/components/buttons";
import { useSignUp} from "../../../imports/controllers/signUpController";
import { AppAvatar } from "../../ui/components/avatar";


const SContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-evenly',
  padding: '10px 0',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
});

const Column = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  padding: '0 22px',
  alignItems: 'flex-start',
  minWidth: '350px',
});

const SButtonContainer = styled(Box)({
  width: '80%',
  paddingTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
});

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
          <Column>
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
              onChange={({ target: { value } }) => signUpProvider.changeValue('email', value)}
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
