import React from "react";
import TemplateDrawer from "../../templates/drawer/templateDrawer";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import {styled} from '@mui/system';
import {useTheme} from '@mui/material/styles';
import { ViewTaskProvider } from "../../../providers/viewTaskProvider";
import ResponsiveColumns from "../../templates/responsiveColumns/responsiveColumns";
import TaskFilter from "./components/taskFilter";
import TaskList from "./components/taskList";
import { Typography } from "@mui/material";

const SFabContainer = styled(Link)(({theme}) =>({
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    zIndex: 1000,
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
        bottom: '1rem',
        right: '1rem',
    }
}));


const TasksPage = () => {
    const theme = useTheme();
    return (
        <TemplateDrawer indexpage={1}>
            <ViewTaskProvider>
                <Typography variant="h4" fontFamily='cursive' fontWeight='bold' > Tarefas </Typography>
                <ResponsiveColumns
                    reversemobile={true}
                    align={'flex-start'}
                    justify={'flex-start'}
                    padding={`${theme.spacing(4)} 0`}
                >
                    <TaskList />
                    <TaskFilter />
                </ResponsiveColumns>
            </ViewTaskProvider>
            <SFabContainer to="/tasks/new" theme={theme}>
                <Fab color="primary" aria-label="add" variant ='extended'   >
                    <AddIcon sx={{mr:1}}/>
                    Adicionar Tarefa
                </Fab>
            </SFabContainer> 
        </TemplateDrawer>
    );
}

export default TasksPage;