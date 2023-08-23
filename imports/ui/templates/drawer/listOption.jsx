import React from 'react';
import List from '@mui/material/List';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import ListItem from './listItem';
import {useTheme} from '@mui/material/styles';
import LogoutIcon from '@mui/icons-material/Logout';
import {Meteor} from 'meteor/meteor';

const SContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '100%',
}));
const SList = styled(List)(({theme}) => ({
    width: '100%',
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: theme.spacing(3),
}));

const OptionsList = ({data, open, indexpage}) => {
    const theme = useTheme();
    return (
        <SContainer>
            <SList theme={theme}>
                {data.map((item) => (
                    <ListItem 
                        key={item.name} 
                        data={item} 
                        open={open} 
                        isselected={(indexpage === item.id) ? 'true' : ''} 
                    />
                ))}
            </SList>
            <ListItem 
                data={{name: 'Fazer Logout', icon: <LogoutIcon />}} 
                open={open} 
                isselected={''} 
                onClick={()=>Meteor.logout()}
            />
        </SContainer>
    )
}

export default OptionsList;






/*const SLink = styled(Link)(({theme}) => ({
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
}));

const SButton = styled(ListItemButton)(({selecteds, theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    backgroundColor: selecteds ? theme.palette.primary.dark : 'transparent',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    }

}));

const SContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '100%',
}));

const SList = styled(List)(() => ({
    width: '100%',
}));

const OptionsList = ({data, open, indexPage}) => {
    const theme = useTheme();
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
                                color: theme.palette.primary.contrastText,
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
                            color: theme.palette.primary.contrastText,
                        }}
                    > <LogoutIcon /></ListItemIcon>
                    <ListItemText primary={'Fazer Logout'} sx={{ opacity: open ? 1 : 0 }} />
                </SButton>
                </SLink>
            </ListItem>
        </SContainer>
    );
}

export default OptionsList;*/