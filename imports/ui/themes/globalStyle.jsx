import React from "react";
import {styled} from "@mui/system";
import { Box, CssBaseline } from "@mui/material";
import theme from "./themeDefault";
import { ThemeProvider } from "@mui/material/styles";

const SRoot = styled(Box)({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
});

const GlobalStyle = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <SRoot>
                {children}
            </SRoot>
        </ThemeProvider>
    );
};

export default GlobalStyle;