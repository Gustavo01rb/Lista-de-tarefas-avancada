import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const AppTextField = ({ label, type, name, value, onChange, error, helperText }) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword((showPassword) => !showPassword);
    };

    return (
        <TextField
            variant='standard'
            label={label}
            type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
            name={name}
            value={value}
            onChange={onChange}
            error={error}
            helperText={helperText}
            size='small'
            margin='normal'
            style={{
                width: '100%',
            }}
            InputProps={
                type === 'password'
                    ? {
                          endAdornment: (
                              <InputAdornment position='end'>
                                  <IconButton
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
