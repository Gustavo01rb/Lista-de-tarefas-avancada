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
        padding = 5
}) => ({
    display: 'flex',
    height: '100%',
    width: '100%',
    gap: theme.spacing(10),
    justifyContent: justify,
    alignItems: align,
    padding: theme.spacing(padding),
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        justifyContent: justifymobile,
        alignItems: alignmobile,
    }
}));


const ResponsiveColumns = ({ 
    children, 
    columnprops,
    justify, 
    justifymobile, 
    align, 
    alignmobile, 
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
        {...props}
    >
      {childrenArray.map((child) => (
          child
      ))}
    </SContainer>
  );
};

export default ResponsiveColumns;