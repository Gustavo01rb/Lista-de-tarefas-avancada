import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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


const AppSelect = ({ label, title, options, ...props }) => {
    const theme = useTheme();
    return (
        <SContainer theme = {theme}>
            <Typography 
                variant='subtitle1' 
                fontWeight={'bold'} 
                sx={{
                    width: '100%',
                    textAlign: 'left',
                    display: title ? 'block' : 'none',
                }}
            >{title}</Typography>
            <FormControl variant='outlined' sx={{ width:'100%' }}>
                <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label={label}
                    sx={{
                        width: title ? `calc(100% - ${theme.spacing(5)})` : '100%',
                        marginLeft: title ? theme.spacing(5) : 0,
                    }}
                    {...props}
                >
                    {options.map((item) => ( 
                        <MenuItem 
                            key={item} 
                            value={item}
                        >{item}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </SContainer>
    );
}

export default AppSelect;