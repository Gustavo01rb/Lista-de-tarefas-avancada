import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const AppTextField = ({ 
    label, 
    type, 
    name, 
    value, 
    onChange, 
    error, 
    multiline = false,
    helperText, 
    ...props }) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword((showPassword) => !showPassword);
    };

    const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

    return (
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
            style={{
                width: '100%',                
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
    );
};

export default AppTextField;
