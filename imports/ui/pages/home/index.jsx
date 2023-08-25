import React from "react";
import TemplateDrawer from "../../templates/drawer/templateDrawer";
import { HomeProvider, useHome } from "../../../providers/homeProvider";
import {styled} from "@mui/system";
import {Box} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import Header from "./components/header";
import HomeBody from "./components/body";
import AppLoading from "../../common/loading";

const SContainer = styled(Box)(({theme}) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: theme.spacing(5),
}));


const HomePage = () => {
    return (
        <TemplateDrawer indexpage={0}>
            <HomeProvider>
                <Content />
            </HomeProvider>   
        </TemplateDrawer>
    );
}

const Content = () => {
    const theme = useTheme();
    const {loading} = useHome();

    if(loading) return (<AppLoading height={'92%'} title="Buscando informações..." />);

    return (
        <SContainer theme={theme}>
            <Header />
            <HomeBody />
        </SContainer>
    )
}

export default HomePage;