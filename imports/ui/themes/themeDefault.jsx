import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1576A3',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#000000',
    },
    error: {
      main: '#FF0000',
      contrastText: '#ffffff',
    },
    success: {
      main: '#1576A3',
      contrastText: '#ffffff',
    },
    notStartedTask:{
      main: '#823F10',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    inProgressTask:{
      main: '#201082',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    finishedTask:{
      main: '#00FF00',
      dark: '#008000',
      contrastText: '#ffffff',
    },
  },
  spacing: 5,
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
