import React from "react";
import { styled } from "@mui/system";
import { Typography, Box } from "@mui/material";
import AppTextField from "../../ui/components/textField";
import { AppLoadingButton, AppTExtButton } from "../../ui/components/buttons";
import { useSignUp} from "../../../imports/controllers/signUpController";
import AppGenericCard from "../../ui/components/genericCard";

const SFormContainer = styled(Box)({
  alignSelf: 'center',
  padding: '20px 3%',
});

const SButtonContainer = styled(Box)({
  width: '80%',
  padding: '15px 0',
  paddingBottom: '0px',
  alignSelf: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const SSimpleText = styled(Typography)({
  marginTop: '20px',
});

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
          <SSimpleText variant="body1">Ainda não possui conta?</SSimpleText>
          <AppTExtButton onClick={changeLogin}> Cadastre-se </AppTExtButton>
        </SButtonContainer>
      </AppGenericCard>
    </form>
  );
};

export default LoginForm;
