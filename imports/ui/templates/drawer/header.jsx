import React from 'react';
import { styled } from '@mui/system';
import {Box, IconButton, Divider} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import {useTheme} from '@mui/material/styles';
import AppLogoImage from '../../common/logoImage';


const SContainer = styled(Box)(({theme, open}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: open ? 'space-between' : 'center',
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    height: open ? "60px" : '40px',
    alignSelf: 'center',
    transition: '0.3s',
}));
const SDivider = styled(Divider)(({theme}) => ({
    backgroundColor: theme.palette.primary.contrastText,
    width: '100%',
    margin: `${theme.spacing(3)} 0`,
}));


const DrawerHeader = ({ open, handleDrawer }) => {
    const theme = useTheme();
    return (
        <>
            <SContainer theme={theme} open = {open}>
                {open && <div></div>}
                {open && <AppLogoImage 
                    variant={1} 
                    minwidth={'auto'} 
                    sx = {{height: '40px'}} 
                />}
                <IconButton onClick={handleDrawer}>
                    { open ? <ChevronLeftIcon /> : <MenuIcon />} 
                </IconButton>
            </SContainer>
            <SDivider  theme={theme}/>
        </>        
    );
}

export default DrawerHeader;