import React from 'react';
import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';

const SContainer = styled(Box)({
    padding: '0 1%',
    width: '90%',
    maxWidth: '650px',
    minWidth: '300px',
    marginRight: '2%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    textAlign: 'center',
    '@media (max-width: 1150px)': {
        width: '100%',
        minWidth: '200px',
        marginBottom: '30px',
    },
});

const Simage = styled('img')({
    width: '80%',
    marginBottom: '30px',
    minWidth: '300px',
    maxWidth: '500px',
});

const WellcomeInfo = () => {
  return (
    <SContainer>
        <Simage src="/images/logo/Horizontal_white_logo.svg" alt="Company Logo" />
        <Typography variant="h4">Bem-vindo à nossa Plataforma de Gerenciamento de Tarefas!</Typography>
    </SContainer>
  );
};

export default WellcomeInfo;
