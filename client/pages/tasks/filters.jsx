import React from "react";
import { Box, styled } from "@mui/system";
import { Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import { useTask } from "../../../imports/controllers/taskController";

const SContainer = styled(Box)(() => ({
    padding: '10px 0',
    paddingLeft: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    '@media (max-width: 768px)': {
        paddingLeft: '0',
    }
}));

const TaskFilters = () => {
    const {changePersonalFilter, personalFilter, changeVisibilityFilter} = useTask();
    return (
        <SContainer>
            <Typography variant="h4" component="h4">Filtros</Typography>

            <FormControl component="fieldset" sx={{ m: 1 }}>
                <FormLabel><Typography variant="h5">Status</Typography></FormLabel>
                    <FormGroup sx={{paddingLeft:'20px'}}>
                        <FormControlLabel 
                            control={<Checkbox size="small" />} 
                            label="Cadastrada"    
                            name="registred"   
                            onChange={changeVisibilityFilter}
                        />
                        <FormControlLabel 
                            control={<Checkbox size="small" />} 
                            label="Em andamento"  
                            name='inProgress'
                            onChange={changeVisibilityFilter}
                        />
                        <FormControlLabel 
                            control={<Checkbox size="small" />} 
                            label="Concluída"     
                            name='done'        
                            onChange={changeVisibilityFilter}
                        />  
                    </FormGroup>
            </FormControl>
            <FormControl component="fieldset" sx={{ m: 1 }}>
                <FormLabel><Typography variant="h5">Visibilidade</Typography></FormLabel>
                    <RadioGroup 
                        sx={{paddingLeft:'20px'}}
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



export default TaskFilters;