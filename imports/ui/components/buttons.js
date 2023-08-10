import React from "react";
import Button from '@mui/material/Button';
import AppColors from "../styles/appcolors";

export const AppLoadingButton = ({children, loading, ...props}) => {
    return (
        <Button 
            {...props} 
            variant="contained" 
            disabled={loading}
            style={{
                width: '100%', 
                backgroundColor: AppColors.primary, 
                color: 'white', 
            }}>
            {loading ? 'Carregando...' : children}
        </Button>
    )
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