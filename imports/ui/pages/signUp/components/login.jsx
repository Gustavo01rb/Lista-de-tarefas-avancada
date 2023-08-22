import React from "react";
import ResponsiveColumns from "../../../templates/responsiveColumns/responsiveColumns";
import AppGenericCard from "../../../common/genericCard";
import AppLogoImage from "../../../common/logoImage";
import {Box, Typography, Button} from "@mui/material";
import {styled} from "@mui/system";
import {useTheme} from "@mui/material/styles";
import AppTextField from "../../../common/textField";
import AppLoadingButton from "../../../common/loadingButton";
import {useSignUp} from "../../../../providers/signUpProvider";

const LoginComponent = () => {
    return (
        <ResponsiveColumns alignmobile='center' justify='space-evenly' >
            <Wellcome />
            <Form />
        </ResponsiveColumns>
    );
}

const SContainerWellcome = styled(Box)(({theme}) => ({
    width: '40%',
    display: 'flex',
    maxWidth: '600px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgorundColor: 'red',
    gap: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginTop: theme.spacing(1),
    }

}));

const Wellcome = () => {
    const theme = useTheme();
    return (
        <SContainerWellcome theme={theme}>
            <AppLogoImage variant = {0} sx={{width:'80%'}} />
            <Typography variant="h4" color='secondary' textAlign='center'>Bem-vindo à nossa Plataforma de Gerenciamento de Tarefas!</Typography>
        </SContainerWellcome>
    );
}

const SContainerForm = styled(Box)(({theme}) => ({
    width: '40%',
    maxWidth: '500px',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    }
}));
const SForm = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
    padding: `0 ${theme.spacing(2)}`,
}));
const SContainerButton = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: `0 ${theme.spacing(2)}`,
    marginTop: theme.spacing(2),
    gap: theme.spacing(1),
}));

const Form = () => {
    const theme = useTheme();
    const {changeLogin, changeLoginFields, loginFields, loginSubmit, loading} = useSignUp();
    return (
        <SContainerForm theme={theme} >
            <AppGenericCard title = 'Entrar' >
                <form onSubmit={loginSubmit} >
                    <SForm theme={theme} >
                        <AppTextField 
                            label = 'Email'
                            type = 'email'
                            value={loginFields.email}
                            onChange={(e) => changeLoginFields('email', e)}
                            required
                        />
                        <AppTextField 
                            label = 'Senha'
                            type = 'password'
                            value={loginFields.password}
                            onChange={(e) => changeLoginFields('password', e)}
                            required
                        />
                        <SContainerButton>
                        <AppLoadingButton 
                            loading = {loading}
                            type = 'submit'
                        >Entrar</AppLoadingButton>
                        <Button 
                            variant='text'
                            onClick={changeLogin} 
                        >Cadastre-se</Button>
                        </SContainerButton>
                    </SForm>
                </form>
            </AppGenericCard>
        </SContainerForm>

    );
};


export default LoginComponent;