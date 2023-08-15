import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AppColors from '../../styles/appColors';
import {Link} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import {Meteor} from 'meteor/meteor';


const SLink = styled(Link)(() => ({
    textDecoration: 'none',
    color: AppColors.onPrimary,
}));

const SButton = styled(ListItemButton)(({selecteds}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5px 7px',
    borderRadius: '5px',
    backgroundColor: selecteds ? AppColors.primaryDark : 'transparent',
    '&:hover': {
        backgroundColor: AppColors.primaryDark,
    }

}));

const SContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    height: '100%',
}));

const SList = styled(List)(() => ({
    height: '100%',
    width: '100%',
}));

const OptionsList = ({data, open, indexPage}) => {
    return(
        <SContainer>
            <SList>
            {data.map((item) => (
                <SLink to={item.path} >
                    <ListItem key={item.name} disablePadding sx={{ display: 'block' }}>
                        <SButton open={open} selecteds={(indexPage === item.id)}>
                            <ListItemIcon
                            sx={{
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                                color: AppColors.onPrimary,
                            }}
                            >
                            {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                        </SButton>
                    </ListItem>
                </SLink>
            ))}
            </SList>
            <ListItem disablePadding sx={{ display: 'block' }}>
                <SLink to={'/'} >
                <SButton open={open} onClick={()=>Meteor.logout()}>
                    <ListItemIcon
                        sx={{
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                            color: AppColors.onPrimary,
                        }}
                    > <LogoutIcon /></ListItemIcon>
                    <ListItemText primary={'Fazer Logout'} sx={{ opacity: open ? 1 : 0 }} />
                </SButton>
                </SLink>
            </ListItem>
        </SContainer>
    );
}

export default OptionsList;