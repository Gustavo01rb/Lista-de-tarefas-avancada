import React from "react";
import {Box, styled} from "@mui/system";
import {useTask} from "../../../imports/controllers/taskController";
import List from "@mui/material/List";
import TaskListItem from "./listItem";
import TaskFilters from "./filters";

const SContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: '97%',
    width: '100%',
    padding: '30px 0',
    '@media (max-width: 768px)': {
        flexDirection: 'column-reverse',
        justifyContent: 'flex-end',
    }
}));

const SListContainer = styled(Box)(() => ({
    width: '55%',
    maxWidth: '700px',
    '@media (max-width: 768px)': {
        width: '100%'
    }
}));


const TaskList = () => {
    const {tasks, onDeleteTaskPressed} = useTask();
    return (
        <SContainer>
            <SListContainer>
                <List>
                    {tasks.map(task => (
                        <TaskListItem task={task} onDeleteTaskPressed={onDeleteTaskPressed} />
                    ))}
                </List>
            </SListContainer>
            <TaskFilters />
        </SContainer>
    );
}

export default TaskList;