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
  },
  spacing: 5,
  shape: {
    borderRadius: 8,
  },
  shadows:[
    'none',
    'none', 
    '0px 2px 4px rgba(0, 0, 0, 0.1)', 
    '0px 4px 8px rgba(0, 0, 0, 0.1)', 
    '0px 8px 16px rgba(0, 0, 0, 0.1)', 
    '0px 16px 24px rgba(0, 0, 0, 0.1)', 
    '0px 24px 32px rgba(0, 0, 0, 0.1)',
  ],
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
