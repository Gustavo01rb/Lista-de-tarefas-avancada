import React from "react";
import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppLogoImage from "../../../common/logoImage";
import AppTextField from "../../../common/textField";
import AppLoadingButton from "../../../common/loadingButton";
import { useSignUp } from "../../../../providers/signUpProvider";
import ResponsiveColumns from "../../../templates/responsiveColumns/responsiveColumns";
import AppGenericCard from "../../../common/genericCard";
import { styled } from "@mui/system";
import InputAvatar from "../../../common/inputAvatar";
import AppSelect from "../../../common/select";
import { GenderOptions } from "../../../helpers/selectOptions";

const SContainer = styled(Box)(({theme}) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    maxWidth: '1200px',
    padding: `${theme.spacing(2)} ${theme.spacing(5)}`,
    gap: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        padding: `${theme.spacing(2)} ${theme.spacing(5)}`,
    }
}));

const SColumn = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(3),
    width: '50%',
    [theme.breakpoints.down('sm')]: {
        width: '100%'
    }
}));

const SContainerButton = styled(Box)(({theme}) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: `0 ${theme.spacing(10)}`,
    marginTop: theme.spacing(2),
    gap: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
        padding: `0 ${theme.spacing(2)}`,
    }
}));

const RegisterComponent = () => {
    const theme = useTheme();
        const { loading, regiterFields, uploadAvatar, changeLoginFields, loginFields, checkPassword, changeLogin, registerSubmit } = useSignUp();
    return (
        <SContainer theme={theme}>
            <AppLogoImage variant={0} sx={{ width: '50%', maxWidth: '350px', align: 'center' }} />
            <AppGenericCard title = 'Cadastrar'>
                <form onSubmit={registerSubmit}>
                    <ResponsiveColumns spacingmobile={theme.spacing(3)} align={'flex-start'} >
                        <SColumn theme={theme}>
                            <InputAvatar 
                                previewSrc={regiterFields.avatar}
                                setPreviewSrc={uploadAvatar}
                            />
                            <AppTextField 
                                label='Nome'
                                type='text'
                                name='name'
                                required
                            />
                            <AppSelect 
                                label='Genêro *'
                                name='gender'
                                options={GenderOptions.getOptions()}   
                            />
                        </SColumn>
                        <SColumn theme={theme}>
                            <AppTextField 
                                label='Data de Nascimento'
                                type='date'
                                name='birthDate'
                                required
                            />
                            <AppTextField
                                label = 'Empresa'
                                type = 'text'
                                name = 'company'
                                required
                            />
                            <AppTextField 
                                label='Email'
                                type='email'
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
                            <AppTextField 
                                label='Confirmar Senha'
                                type='password'
                                onChange={checkPassword}
                                error={regiterFields.errorConfirmPassword}
                                helperText={regiterFields.errorConfirmPassword ? "As senhas não coincidem" : ""} 
                                required
                            />
                            <SContainerButton>
                                <AppLoadingButton 
                                    loading = {loading}
                                    type = 'submit'
                                >Cadastrar</AppLoadingButton>
                                <Button 
                                    variant='text'
                                    onClick={changeLogin} 
                                >Voltar ao Login</Button>
                            </SContainerButton>
                        </SColumn>
                    </ResponsiveColumns>
                </form>
            </AppGenericCard>
        </SContainer>
    );
}

export default RegisterComponent;