import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import AppColors from '../../styles/appColors';
import DrawerHeader from './header';
import OptionsList from './options';
import {data} from './data';

const drawerWidth = 240;

const SDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor: AppColors.primary,
  color: AppColors.onPrimary,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  backgroundColor: AppColors.primary,
  color: AppColors.onPrimary,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});



function TemplateDrawer({children, indexPage}) {
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => setOpen(!open);
  

  return (
    <Box sx={{ display: 'flex' }}>
      <SDrawer variant="permanent" open={open}>
        <DrawerHeader open={open} handleDrawer={handleDrawer} />
        <OptionsList data={data} open={open} indexPage={indexPage}/>
        
      </SDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {children}
      </Box>
    </Box>
  );
}

export default TemplateDrawer;