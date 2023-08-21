import React from "react";
import TemplateDrawer from "../../ui/templates/drawer/templateDrawer";
import {Link} from "react-router-dom";
import FloatActionButton from "../../ui/components/floatActionButton";
import { TaskController, useTask } from "../../../imports/controllers/taskController";
import TaskList from "./taskList";
import Typography from '@mui/material/Typography';
import AppLoading from "../../ui/components/loading";
import AppError from "../../ui/components/error";

const TasksPage = () => {
    return (
        <TemplateDrawer indexPage={1}>
            <Typography variant="h4" fontWeight='bold'>Tarefas</Typography>
            <TaskController>
                <Content/>
            </TaskController>
            <Link to="/tasks/new">
                <FloatActionButton/>
            </Link>
        </TemplateDrawer>
    );
}

const Content = () => {
    const {loading, loadingError,titleError,messageError} = useTask();
    return (
        <>
            {loading 
                ? <AppLoading abosotuteCenter={true} text={'Carregando mensagens...'}/> 
                : loadingError
                    ? <AppError title={titleError} message={messageError} />
                    : <TaskList/>
            }
        </>
    );
}


export default TasksPage;