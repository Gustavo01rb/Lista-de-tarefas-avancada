import React from 'react';
import { styled } from '@mui/system';
import AppColors from '../../styles/appColors';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';

const SContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: AppColors.onPrimary,
  margin: '10px',
  borderRadius: '5px',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
  '-webkit-box-shadow': '0px 0px 10px 0px rgba(0,0,0,0.75)',
  '-moz-box-shadow': '0px 0px 10px 0px rgba(0,0,0,0.75)',
});

const SDrawerOpen = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  padding: '10px 0',
  paddingLeft: '15px',
});

const DrawerHeader = ({ open, handleDrawer }) => {
  return (
    <>
      <div></div>
      <SContainer>
        {open ? (
          <SDrawerOpen>
            <img src="/images/logo/Horizontal_black_logo.svg" alt="logo" style={{ width: '150px' }} />
            <IconButton onClick={handleDrawer}> <ChevronLeftIcon /> </IconButton>
          </SDrawerOpen>
        ) : (
          <IconButton aria-label="open drawer" onClick={handleDrawer}> <MenuIcon /> </IconButton>
        )}
      </SContainer>
      <Divider style={{ backgroundColor: AppColors.onPrimary }} />
    </>
  );
}

export default DrawerHeader;
