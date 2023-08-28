import React from "react";
import TemplateDrawer from "../../templates/drawer/templateDrawer";
import { ProfileProvider, useProfile } from "../../../providers/profileProvider";
import ResponsiveColumns from '../../templates/responsiveColumns/responsiveColumns'
import AppLoading from "../../common/loading";
import FormProfile from "./components/formData";
import EmailForm from "./components/emailForm";
import PasswordForm from "./components/passwordForm";
import {styled} from '@mui/system';
import {Box, Typography} from '@mui/material';
import {useTheme} from '@mui/material/styles';

const SSensitiveData = styled(Box)(({theme}) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: theme.spacing(5),
}));

const ProfilePage = () => {
    return (
        <TemplateDrawer indexpage={2}>
            <ProfileProvider>
                <Content />
            </ProfileProvider>
        </TemplateDrawer>
    );
}

const Content = () => {
    const theme = useTheme();
    const {loading} = useProfile();
    if(loading) return (<AppLoading height={'92%'} title="Buscando informações do perfil..." />);

    return (
        <ResponsiveColumns 
            padding={0}
            align={'flex-start'}
        >
            <FormProfile />
            <SSensitiveData theme={theme}>
                <Typography variant='h4' component='h6'>Dados sensíveis</Typography>
                <EmailForm />
                <PasswordForm />
            </SSensitiveData>
        </ResponsiveColumns>
    );

}

export default ProfilePage;