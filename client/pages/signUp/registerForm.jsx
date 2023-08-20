import React from "react";
import { styled, Box } from "@mui/system";
import AppGenericCard from "../../ui/components/genericCard";
import AppTextField from "../../ui/components/textField";
import AppSelect from "../../ui/components/select";
import { AppLoadingButton, AppTExtButton } from "../../ui/components/buttons";
import { useSignUp} from "../../../imports/controllers/signUpController";
import { AppAvatar } from "../../ui/components/avatar";
import ResponsiveColumns from "../../ui/templates/responsiveColumns/responsiveColumns";


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
        <ResponsiveColumns
          padding = '10px 0'
          paddingColumn = '0 22px'
          minWidthColumn = '350px'
        >
          <>
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
          </>
          <>
            <AppTextField 
              type='date' 
              label="Data de aniversário" 
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
          </>
        </ResponsiveColumns>
      </form>
    </AppGenericCard>
  );
}

export default RegisterForm;
