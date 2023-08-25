import React, { createContext, useContext, useState } from "react";
import { Meteor } from "meteor/meteor";
import { useNavigate } from 'react-router-dom';
import SimpleDialog from "../ui/common/simpleDialog";
import {TaskCollection} from "../database/taskCollection";
import {useTracker} from "meteor/react-meteor-data";

const EditTaskContext = createContext();
export const useEditTask = () => useContext(EditTaskContext);

const initialState = {
    loading: true,
    dataTask: {},
    initialTask: {},
    edited: false,
    loadingButton: false,
}
const initialStateDialog = {
    show: false,
    onClose: () => { },
    title:'',
    message: '',
    confirmButton: null,
    cancelButton: false,
    variant: '',
}

export const EditTaskProvider = ({ taskId, children }) => {
    const [state, setState] = useState(initialState);
    const [dialog, setDialog] = useState(initialStateDialog);
    const navigate = useNavigate();
    
    const changeField = (field, {target: {value}}) => {
        setState({...state, dataTask: {...state.dataTask, [field]: value}});
    }
    const changeCheckbox = (field, {target: {checked}}) => {
        setState({...state, dataTask: {...state.dataTask, [field]: checked}});
    }

    const cancelEdit = () => setState({...state, dataTask: state.initialTask});

    const onSubmitted = (event) => {
        event.preventDefault();
        setState({...state, loadingButton: true});
        const {_id,title, description, status, personal, date} = state.dataTask;
        console.log(state.dataTask);
        Meteor.call('tasks.editTask', {
            taskId: _id,
            title: String(title),
            description: String(description),
            date: String(date),
            status: String(status),
            personal: personal,
        }, (error) => {
            if(error){
                setDialog({
                    show: true,
                    onClose: () => setDialog(initialStateDialog),
                    title: 'Não foi possível editar a tarefa',
                    message: 'Não foi possível editar sua tarefa.\nPor favor, tente novamente mais tarde.' + error.message,
                    cancelButton: false,
                    variant: 'error',
                });
                return;
            };
            setDialog({
                show: true,
                onClose: () => setDialog(initialStateDialog),
                title: 'Tarefa editada com sucesso',
                message: 'Sua tarefa foi editada com sucesso.',
                cancelButton: false,
                variant: 'success',
            });
        });
        setState({...state, loadingButton: false});
    }

    useTracker(() => {
        const edited = JSON.stringify(state.dataTask) !== JSON.stringify(state.initialTask);
        setState({...state, edited});
    }, [state.dataTask]);
    
    useTracker(() => {
        try{
            if(!taskId) throw new Meteor.Error('Não foi possível encontrar sua tarefa.');
            const handler = Meteor.subscribe('tasks');
            if(!handler.ready()){
                setState({...state, loading: true});
                return;
            };
            const task = TaskCollection.findOne({_id: taskId});
            if(!task) throw new Meteor.Error('Não foi possível encontrar sua tarefa.');
            Meteor.subscribe('userData');
            task.user = Meteor.users.findOne({_id: task.userId}).profile;
            setState({...state, loading: false, dataTask: task, initialTask: task}); 
        }catch(error){
            setDialog({
                show: true,
                onClose: () => navigate('/tasks'),
                title: 'Algo inexperado aconteceu',
                message: 'Não foi possível carregar a tarefa.\nPor favor, tente novamente mais tarde.' + error.message,
                cancelButton: false,
                variant: 'error',
            });
        }        
    }, [taskId]);


    const contextValue = {
        ...state,
        changeField,
        changeCheckbox,
        cancelEdit,
        onSubmitted
    }
    return (
        <>
            <EditTaskContext.Provider value={contextValue}>
                {children}
            </EditTaskContext.Provider>
            <SimpleDialog 
                open={dialog.show}
                onClose={dialog.onClose}
                title={dialog.title}
                message={dialog.message}
                cancelButton={dialog.cancelButton}
                buttonText={dialog.buttonText}
                onButtonPressed={dialog.confirmButton ? dialog.confirmButton : null}
                variant={dialog.variant}
            />
        </>
    );
}