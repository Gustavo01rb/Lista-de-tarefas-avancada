import React from "react";
import {styled} from '@mui/system';
import {useTheme} from '@mui/material/styles';
import {Box} from '@mui/material';
import {useViewTask} from "../../../../providers/viewTaskProvider";
import { Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import {StatusTaskOptions} from "../../../helpers/selectOptions";

const SContainer = styled(Box)(({theme}) => ({
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    }
}));

const TaskFilter = () => {
    const theme = useTheme();
    const {changePersonalFilter, personalFilter, changeVisibilityFilter} = useViewTask();

    return (
        <SContainer theme={theme}>
            <Typography variant="h4">Filtros</Typography>

            <FormControl component="fieldset" sx={{ m: 1 }}>
                <FormLabel><Typography variant="h5">Status</Typography></FormLabel>
                    <FormGroup sx={{paddingLeft: theme.spacing(4)}}>
                        <FormControlLabel 
                            control={<Checkbox size="small" />} 
                            label= {StatusTaskOptions.notStarted}    
                            name="registred"   
                            onChange={changeVisibilityFilter}
                        />
                        <FormControlLabel 
                            control={<Checkbox size="small" />} 
                            label= {StatusTaskOptions.inProgress}  
                            name='inProgress'
                            onChange={changeVisibilityFilter}
                        />
                        <FormControlLabel 
                            control={<Checkbox size="small" />} 
                            label= {StatusTaskOptions.done}     
                            name='done'        
                            onChange={changeVisibilityFilter}
                        />  
                    </FormGroup>
            </FormControl>
            <FormControl component="fieldset" sx={{ m: 1 }}>
                <FormLabel><Typography variant="h5">Visibilidade</Typography></FormLabel>
                    <RadioGroup 
                        sx={{paddingLeft: theme.spacing(4)}}
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={personalFilter}
                        onChange={changePersonalFilter}
                    >
                        <FormControlLabel 
                            control={<Radio />} 
                            label="Somente tarefas pessoais"
                            value='personal' 
                        />
                        <FormControlLabel 
                            control={<Radio />} 
                            label="Somente tarefas publicas"
                            value='public' 
                        />
                        <FormControlLabel 
                            control={<Radio />} 
                            label="Somente tarefas criadas por outras pessoas" 
                            value='other'
                        />
                        <FormControlLabel 
                            control={<Radio />} 
                            label="Todas as tarefas"   
                            value='all'
                        />  
                    </RadioGroup>
            </FormControl>
        </SContainer>
    );
}

export default TaskFilter;