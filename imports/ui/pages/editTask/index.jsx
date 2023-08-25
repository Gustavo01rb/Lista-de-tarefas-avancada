import React from "react";
import { useParams } from 'react-router-dom';
import { EditTaskProvider, useEditTask} from "../../../providers/editTaskProvider";
import ResponsiveColumns from "../../templates/responsiveColumns/responsiveColumns";
import DecImage from "./components/decImage";
import FormEditTask from "./components/formEditTask";
import AppLoading from "../../common/loading";

const EditTaskPage = () => {
    const { taskId } = useParams();

    return (
        <EditTaskProvider taskId={taskId}>
            <Content />
        </EditTaskProvider>
    );
}


const Content = () => {
    const {loading} = useEditTask();
    return(
     <>
        {
            loading ? <AppLoading title='Carregando as informações da tarefa' /> 
            : <ResponsiveColumns
                padding = {0}
                align={'flex-start'}
                spacing={0}
                sx={{
                    minHeight: '100vh',
                }}
            >
                <DecImage />
                <FormEditTask />
            </ResponsiveColumns>
        }
    </>
    );
}
export default EditTaskPage;