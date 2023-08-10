import React from "react";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';
import AppColors from "../styles/appcolors";

const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LoadingText = styled.span`
    margin-left: 10px;
`;

export const AppLoadingButton = ({ children, loading, ...props }) => {
    return (
        <Button
            {...props}
            variant="contained"
            disabled={loading}
            style={{
                width: '100%',
                backgroundColor: AppColors.primary,
                color: 'white',
                position: 'relative',
            }}
        >
            {loading ? (
                <LoadingContainer>
                    <CircularProgress
                        style={{
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
}

export const AppTExtButton = ({children, ...props}) => {
    return (
        <Button 
            {...props} 
            variant="text" 
            size="small"
            style={{
                backgroundColor: 'transparent',
                color: AppColors.primary,
            }}
        >
            {children}
        </Button>
    )
}
