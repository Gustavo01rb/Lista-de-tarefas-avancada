import React, { createContext, useContext, useState } from "react";
import {useTracker} from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import {TaskCollection} from '../database/taskCollection';
import SimpleDialog from "../../client/ui/components/simpleDialog";

const EditTaskContext = createContext();
export const useEditTask = () => useContext(EditTaskContext);

const initialState = {
    loading: true,
    error: false,
    task: {},
    edit: false,
    errorTitle: '',
    errorMessage: '',
    user: {}
};

const initialStateAlert = {
    show: false,
    onClose: () => { },
    title:'',
    message: '',
}

export const EditTaskController = ({taskId,  children }) => {
    const [state, setState] = useState(initialState);

    const onFloatActionButtonTap = () => {
        setState(prevState => ({
            ...prevState,
            edit: !prevState.edit,
        }));
    }
    const saveTaks = () => {
        try{
        Meteor.subscribe('tasks');
        Meteor.call('tasks.editTask', state.task[0]._id, state.task[0] , (error, result) => {
            if(error){
                console.log("error", error);    
        }});
        onFloatActionButtonTap();
        }catch(e){
            console.log(e);
            onFloatActionButtonTap();
        }
    }

    const editTask = (field, event) => {
        setState((prevState) => {
            const updatedTask = [...prevState.task];
            updatedTask[0] = {
                ...updatedTask[0],
                [field]: event.target.value
            };
            return {
                ...prevState,
                task: updatedTask
            };
        });
    };


    useTracker(() => {
        try{
            if (!taskId) throw new Meteor.Error('Não encontrado.','As informações solicitadas não existem ou não foram encontradas.');
            if (!Meteor.userId()) throw new Meteor.Error('Não autorizado.','Você não está autorizado a realizar esta ação.');
            const subscription = Meteor.subscribe('tasks');
            if (!subscription.ready()) return;
    
            const task = TaskCollection.find({_id: taskId}).fetch();
            if (!task) throw new Meteor.Error('Não encontrado.','As informações solicitadas não existem ou não foram encontradas.');
            setState(prevState => ({
                ...prevState,
                task: task,
            }));

            const userSubscription = Meteor.subscribe('userData', task[0].creatorId);
            if (!userSubscription.ready()) return;

            const user = Meteor.users.findOne({_id: task[0].creatorId});
            if (!user) throw new Meteor.Error('Não encontrado.','As informações solicitadas não existem ou não foram encontradas.');
            setState(prevState => ({
                ...prevState,
                loading: false,
                user: user,
            }));


        }catch(error){
            setState(prevState => ({
                ...prevState,
                loading: false,
                error: true,
                errorTitle: error.error,
                errorMessage: error.reason,
            }));
        }
    }, [taskId]);
    

    const contextValue ={
        ...state,
        onFloatActionButtonTap,
        editTask,
        saveTaks
    }
    return (
        <EditTaskContext.Provider value={contextValue}>
            {children}
        </EditTaskContext.Provider>
    );
}
