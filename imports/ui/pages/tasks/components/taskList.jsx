import React from "react";
import {styled} from '@mui/system';
import {useTheme} from '@mui/material/styles';
import {Box} from '@mui/material';
import AppTextField from "../../../../ui/common/textField";
import SearchIcon from '@mui/icons-material/Search';
import {useViewTask} from "../../../../providers/viewTaskProvider";
import EmptyTask from "./emptyTask";
import List from "@mui/material/List";
import TaskListItem from "./listItem";
import CircularProgress from '@mui/material/CircularProgress';


const SContainer = styled(Box)(({theme}) => ({
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: theme.spacing(4),

    [theme.breakpoints.down('sm')]: {
        width: '100%',
    }

}));

const SList = styled(List)(({theme}) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: theme.spacing(2),
}));

const TaskFilter = () => {
    const theme = useTheme();
    const {tasks, textValue, changeTextValue, onDeleteTaskPressed, loading} = useViewTask();
    return (
        <SContainer theme={theme}>
            <AppTextField 
                endIcon={<SearchIcon sx={{opacity: 0.5}}/>}
                placeholder="Pesquisar pelo título da tarefa"
                value={textValue}
                onChange={changeTextValue}
            />
            {
                loading 
                    ? <CircularProgress size={100} sx={{mt: 20}} />
                    : tasks.length === 0 
                        ? <EmptyTask />
                        : <SList theme={theme} >
                            {tasks.map(task => <TaskListItem key={task._id} task={task} onDeleteTaskPressed={onDeleteTaskPressed}/>)}
                        </SList>
            }
        </SContainer>
    );
}

export default TaskFilter;