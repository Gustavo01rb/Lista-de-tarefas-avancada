import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import AppTextField from "../../ui/components/textField";
import AppSelect from "../../ui/components/select";
import AppCheckBox from "../../ui/components/checkBox";
import { AppLoadingButton } from "../../ui/components/buttons";
import {AddTaskController, addTask} from "../../../imports/controllers/addTaskController";



const SContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    padding: '0 5%',
    minHeight: '100vh',

});

const SForm = styled('form')({
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',

});

const Simage = styled('img')({
    width: '20%',
    marginBottom: '15px',
    minWidth: '300px',
    maxWidth: '500px',
});

const SButton = styled(AppLoadingButton)({
    marginTop: '15px',
})


const AddTaskPage = () => {
    return (
        <AddTaskController>
            <Content />
        </AddTaskController>
    );
};

const Content = () => {
    const { loading, onRegisterSubmit, personalChecked, changePersonalChecked } = addTask();
    return (
        <SContainer>
            <Simage src="/images/logo/Horizontal_black_logo.svg" alt="Logo" />
            <SForm onSubmit={onRegisterSubmit}>
                <AppTextField 
                    label={'Nome da tarefa'} 
                    type={'name'}
                    name={'name'}
                    required
                />
                <AppTextField 
                    label={'Descrição'} 
                    multiline={true} 
                    type = {'name'} 
                    name={'description'}
                />
                <AppTextField 
                    label={'Data'} 
                    type = {'date'} 
                    name={'date'}
                />
                <AppSelect 
                    defaultValue="Cadastrada"
                    label="Status" 
                    name='status' 
                    options={['Cadastrada', 'Em andamento', 'Concluida']} 
                />
                <AppCheckBox 
                    title={'Tarefa Pessoal'} 
                    subtitle={'*Tarefas pessoais só podem ser vista por seus criadores.'}
                    value={personalChecked}
                    onChange={changePersonalChecked}
                />
                <SButton type='submit' loading={loading}>Cadastrar</SButton>
            </SForm>
        </SContainer>
    );
}

export default AddTaskPage;