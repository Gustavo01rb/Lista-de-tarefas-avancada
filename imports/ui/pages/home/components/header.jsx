import React from "react";
import { useHome } from "../../../../providers/homeProvider";
import {styled} from "@mui/system";
import {Box, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";


const SContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: theme.spacing(2)
}));

const Header = () => {
    const theme = useTheme();
    const { incompleteTask} = useHome();

    return (
        <SContainer theme={theme}>
            <Typography 
                variant='h3' 
                color='primary'
                fontWeight='bold'
                fontFamily='serif'
                textAlign='center'
                sx={{
                    borderBottom: `1px solid ${theme.palette.primary.main}`,
                }}
            >Bem-vindo ao TarefasSync!</Typography>
            <Typography 
                variant='h6' 
                textAlign='center'
            >{`Ainda restam ${incompleteTask} tarefas para serem concluídas.`}</Typography>
        </SContainer>
    );
};

export default Header;