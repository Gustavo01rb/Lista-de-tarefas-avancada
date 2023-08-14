import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AppColors from '../../styles/appcolors';
import {Link} from 'react-router-dom';
import { styled } from '@mui/material/styles';


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

const OptionsList = ({data, open, indexPage}) => {
    return(
        <List>
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
        </List>
    );
}

export default OptionsList;