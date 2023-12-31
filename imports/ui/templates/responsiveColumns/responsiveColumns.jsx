import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const SContainer = styled(Box)(({ 
        theme, 
        justify = 'center', 
        align = 'center',
        justifymobile = 'flex-start',
        alignmobile = 'flex-start',
        reversemobile = false,
        padding = 5,
        spacing = 10,
        spacingmobile = 10
}) => ({
    display: 'flex',
    width: '100%',
    gap: theme.spacing(spacing),
    justifyContent: justify,
    alignItems: align,
    padding: theme.spacing(padding),
    [theme.breakpoints.down('sm')]: {
        flexDirection: reversemobile ? 'column-reverse' : 'column',
        justifyContent: justifymobile,
        alignItems: alignmobile,
        gap: theme.spacing(spacingmobile),
    }
}));


const ResponsiveColumns = ({ 
    children, 
    columnprops,
    justify, 
    justifymobile, 
    align, 
    alignmobile, 
    spacing,
    spacingmobile,
    reversemobile,
    ...props
}) => {
  const childrenArray = React.Children.toArray(children);
  const theme = useTheme();

  return (
    <SContainer 
        theme={theme} 
        justify={justify} 
        align={align} 
        alignmobile = {alignmobile} 
        justifymobile = {justifymobile}
        spacing = {spacing}
        reversemobile = {reversemobile}
        spacingmobile = {spacingmobile} 
        {...props}
    >
      {childrenArray.map((child) => (
          child
      ))}
    </SContainer>
  );
};

export default ResponsiveColumns;