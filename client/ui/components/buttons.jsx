import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/system";
import AppColors from "../styles/appColors";

const LoadingContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const LoadingText = styled('span')({
  marginLeft: '10px',
});

export const AppLoadingButton = ({ children, loading, ...props }) => {
  return (
    <Button
      {...props}
      variant="contained"
      disabled={loading}
      sx={{
        width: '100%',
        backgroundColor: AppColors.primary,
        color: 'white',
        position: 'relative',
      }}
    >
      {loading ? (
        <LoadingContainer>
          <CircularProgress
            sx={{
              color: 'white',
              width: '20px',
              height: '20px',
            }}
          />
          <LoadingText>Carregando...</LoadingText>
        </LoadingContainer>
      ) : (
        children
      )}
    </Button>
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
