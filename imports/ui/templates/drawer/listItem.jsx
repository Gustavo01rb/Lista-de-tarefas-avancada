import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/system';
import {Box, Typography} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import {Link} from 'react-router-dom';

const SListItem = styled(Link)(({theme, isselected, open}) => ({
    width: '100%',
    height: open ? '50px' : '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: isselected ? theme.palette.primary.dark : 'transparent',
    transition: '0.3s',
    textDecoration: 'none',
    padding: `0 ${theme.spacing(2)}`,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));

const SIcon = styled(Box)(({theme}) => ({
    color : "white",
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));


const DrawerListItem = ({ data, open, isselected, onClick }) => {
    const theme = useTheme();
    return (
        <SListItem 
            to={data.path}
            theme={theme} 
            isselected = {isselected} 
            open={open} 
            onClick={onClick}
        >
            <SIcon>
                {data.icon}
            </SIcon>
            {
                open && 
                <Typography 
                    color={theme.palette.primary.contrastText}
                    variant="body1"
                    fontWeight='bold'
                    sx={{
                        width: '100%',
                        marginLeft: theme.spacing(2)}}
                >
                    {data.name}
                </Typography>}
        </SListItem>
    );
}

export default DrawerListItem;