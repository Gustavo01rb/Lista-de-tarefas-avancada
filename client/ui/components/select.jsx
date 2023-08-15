import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const AppSelect = ({ label, options, ...props }) => {
    return (
        <FormControl variant="standard" sx={{ width:'100%' }}>
            <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label={label}
                {...props}
            >
                {options.map((item) => ( 
                    <MenuItem value={item}>{item}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default AppSelect;