import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import DrawerHeader from './header';
import OptionsList from './listOption';
import {data} from '../../helpers/drawerOptions';
import {useTheme} from '@mui/material/styles';

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
  display: 'flex',
  flexDirection: 'column',
  padding: `${theme.spacing(3)} ${theme.spacing(2)}`,
  backgroundColor: theme.palette.primary.main,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  padding: `${theme.spacing(3)} ${theme.spacing(1)}`,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(10)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(11)} + 1px)`,
  },
});



function TemplateDrawer({children, indexpage}) {
  const [open, setOpen] = React.useState(false);
  const handleDrawer = () => setOpen(!open);
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex' }}>
      <SDrawer variant="permanent" open={open} theme={theme}>
        <DrawerHeader open={open} handleDrawer={handleDrawer} />
        <OptionsList data={data} open={open} indexpage={indexpage}/>
      </SDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, position: 'relative', minHeight:'100vh' }}>
            {children}
      </Box>
    </Box>
  );
}

export default TemplateDrawer;