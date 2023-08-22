import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const LoadingContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const LoadingText = styled('span')({
  marginLeft: '10px',
});

const AppLoadingButton = ({ children, loading, startIcon, ...props }) => {
  return (
    <Button
      {...props}
      variant="contained"
      color="primary"
      disabled={loading}
      startIcon={loading ? '' : startIcon}
    >
      {loading ? (
        <LoadingContainer>
          <CircularProgress
            size={20}
          />
          <LoadingText>Carregando...</LoadingText>
        </LoadingContainer>
      ) : (
        <Typography variant="button">{children}</Typography>
      )}
    </Button>
  );
};

export default AppLoadingButton;