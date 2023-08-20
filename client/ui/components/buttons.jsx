import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/system";
import AppColors from "../styles/appColors";
import { Typography } from "@mui/material";

const LoadingContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const LoadingText = styled('span')({
  marginLeft: '10px',
});

const LoadingButton = styled(Button)(({
  backgroundColor = AppColors.primary,
  color = AppColors.onPrimary,
  width = '100%',
  margin = '0',
  alignSelf = 'center',
  padding = 'auto',
  hoverColor = AppColors.primaryDark,
  minWidth = 'auto',
  
}) => ({
  backgroundColor: backgroundColor,
  color: color,
  width: width,
  margin: margin,
  alignSelf: alignSelf,
  padding: padding,
  minWidth: minWidth,
  transition: '0.2s',
  '&:hover': {
    backgroundColor: hoverColor,
  },
}));

export const AppLoadingButton = ({ children, loading, startIcon, ...props }) => {
  return (
    <LoadingButton
      {...props}
      variant="contained"
      disabled={loading}
      startIcon={loading ? 'none' : startIcon}
    >
      {loading ? (
        <LoadingContainer>
          <CircularProgress
            sx={{
              color: 'white',
              width: '10px',
              height: '10px',
            }}
          />
          <LoadingText>Carregando...</LoadingText>
        </LoadingContainer>
      ) : (
        <Typography variant="button">{children}</Typography>
      )}
    </LoadingButton>
  );
};

export const AppTExtButton = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      variant="text"
      size="small"
      sx={{
        backgroundColor: 'transparent',
        color: AppColors.primary,
      }}
    >
      {children}
    </Button>
  );
};
