import React from "react";
import { useParams } from 'react-router-dom';
import {EditTaskController, useEditTask} from "../../../imports/controllers/editTaskController";
import { Box, styled } from "@mui/system";
import AppLoading from "../../ui/components/loading";
import FieldsComponent from "./fields";
import AppError from "../../ui/components/error";

const SContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    padding: '30px 2%',
    minHeight: '100vh',
    position: 'relative',

}));


const Simage = styled('img')({
    width: '20%',
    marginBottom: '100px',
    minWidth: '300px',
    maxWidth: '500px',
});

const EditTaskPage = () => {
    const { taskId } = useParams();
    return (
        <EditTaskController taskId={taskId}>
            <Content />
        </EditTaskController>        
    );
}

const Content = () => {
    const {loading, error, errorTitle, errorMessage} = useEditTask();
    return (
        <>
            <SContainer>
                <Simage src="/images/logo/Horizontal_black_logo.svg" alt="Logo" />
                {
                    loading 
                        ?   <AppLoading  abosotuteCenter={true} text="Carregando informações da tarefa..."/>
                        :   error 
                            ? <AppError title={errorTitle} message={errorMessage} />
                            : <FieldsComponent />
                }
            </SContainer>
        </>
    );
}

export default EditTaskPage;