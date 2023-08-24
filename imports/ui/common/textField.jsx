import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const SContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(1),
    width: '100%',
}));

const AppTextField = ({ 
    label, 
    type, 
    name, 
    value, 
    onChange, 
    error,
    title = '',  
    multiline = false,
    helperText, 
    ...props }) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword((showPassword) => !showPassword);
    };

    const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;
    const theme = useTheme();
    return (
        <SContainer title={title} theme={theme}>
            <Typography 
                variant='subtitle1' 
                fontWeight={'bold'} 
                sx={{
                    width: '100%',
                    textAlign: 'left',
                    display: title ? 'block' : 'none',
                }}
            >{title}</Typography>

            <TextField
                {...props}
                variant='outlined'
                label={label}
                type={inputType}
                name={name}
                value={value}
                onChange={onChange}
                error={error}
                helperText={helperText}
                multiline = {multiline}
                size='small'
                rows = {multiline ? 5 : 1}
                sx = {{
                    width: title ? `calc(100% - ${theme.spacing(5)})` : '100%',
                    marginLeft: title ? theme.spacing(5) : 0,
                }}
                InputLabelProps={
                    type === 'date'
                    ?{ shrink: true}
                    :{}
                }
                InputProps={
                    type === 'password'
                        ? {
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton
                                        size='small'
                                        aria-label='toggle password visibility'
                                        onClick={handleTogglePasswordVisibility}
                                        edge='end'
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }
                        : {}
                }
            />
        </SContainer>
    );
};

export default AppTextField;
