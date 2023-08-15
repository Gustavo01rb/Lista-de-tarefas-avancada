import React from "react";
import { createTheme } from "@mui/material";
import { styled, ThemeProvider } from "@mui/system";
import { CssBaseline } from "@mui/material";

const theme = createTheme();

const GlobalStyle = styled('div')({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: theme.typography.fontFamily,
  },
});

const GlobalStyles = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default GlobalStyles;
