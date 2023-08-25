import React, { createContext, useContext, useState } from "react";
import { Meteor } from "meteor/meteor";
import SimpleDialog from "../ui/common/simpleDialog";
import {useTracker} from "meteor/react-meteor-data";
import {TaskCollection} from "../database/taskCollection";
import {StatusTaskOptions} from "../ui/helpers/selectOptions";

const ViewTaskContext = createContext();
export const useViewTask = () => useContext(ViewTaskContext);

const initialState = {
    loading: true,
    textValue: '',
    tasks: [],
    error: ''
};
const initialFilters = {
    personalFilter: 'all',
    visibilityFilter: {
        registred: false,
        inProgress: false,
        done: false,
    },
};
const initialStateDialog = {
    show: false,
    onClose: () => { },
    title:'',
    message: '',
    confirmButton: null,
    cancelButton: false,
    variant: '',
};

export const ViewTaskProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    const [dialog, setDialog] = useState(initialStateDialog);
    const [taskFilters, setTaskFilters] = useState(initialFilters);
    
    const changePersonalFilter = (event) => {
        setTaskFilters({
            ...taskFilters,
            personalFilter: event.target.value,
        });
    }

    const changeVisibilityFilter = (event) => {
        setTaskFilters({
            ...taskFilters,
            visibilityFilter: {
                ...taskFilters.visibilityFilter,
                [event.target.name]: event.target.checked,
            }
        });
    }

    const changeTextValue = ({target:{value}}) => setState({...state, textValue: value.trim()});


    const onDeleteTaskPressed = (taskId) => {
        console.log(taskId);
        setDialog({
            show: true,
            onClose: () => setDialog(initialStateDialog),
            title: 'Deletar tarefa',
            message: 'Tem certeza que deseja deletar essa tarefa?\nEssa ação não pode ser desfeita.',
            buttonText: 'Deletar',
            cancelButton: true,
            variant: 'warning',
            confirmButton: () => {
                setDialog(initialStateDialog);
                Meteor.call('tasks.remove', taskId, (error, _) => {
                    if(error){
                        setDialog({
                            show: true,
                            onClose: () => setDialog(initialStateDialog),
                            title: 'Erro ao deletar tarefa',
                            message: error.message,
                            buttonText: 'Fechar',
                            variant: 'error',
                        });
                        return;
                    }
                    setDialog({
                        show: true,
                        onClose: () => setDialog(initialStateDialog),
                        title: 'Tarefa deletada',
                        message: 'A tarefa foi deletada com sucesso.',
                        buttonText: 'Fechar',
                        variant: 'success',
                    });
                    
                });
            },
        });
        
        
    };

    useTracker(() => {
        try{
            if(!Meteor.userId()) throw new Meteor.Error('Acesso não autorizado.');
            const handler = Meteor.subscribe('tasks');
            setState({...state, loading: true});
            
            if(!handler.ready()){
                setState({...state, loading: true});
                return;
            }
            
            const getFilter = () => {
                let regexQuery = {};
                let personalQuery = {};
                let statusQuery = [];

                if (state.textValue) 
                    regexQuery = {title: {$regex: state.textValue, $options: 'i'}};
                switch(taskFilters.personalFilter){
                    case 'personal':
                        personalQuery = {personal: true};
                        break;
                    case 'public':
                        personalQuery = {personal: false};
                        break;
                    case 'other':
                        personalQuery = {userId: {$ne: Meteor.userId()}};
                    break;
                    default:
                        personalQuery = {};
                    break;
                }

                if(taskFilters.visibilityFilter.registred) 
                    statusQuery.push({status: StatusTaskOptions.notStarted});
                if(taskFilters.visibilityFilter.inProgress)
                    statusQuery.push({status: StatusTaskOptions.inProgress});
                if(taskFilters.visibilityFilter.done)
                    statusQuery.push({status: StatusTaskOptions.done});

                const filter = statusQuery.length > 0 ? {$and: [{$or: statusQuery}, regexQuery, personalQuery]} : {$and: [regexQuery, personalQuery]};
                
                return filter;  
            } 
            
            const tasks = TaskCollection.find(getFilter()).fetch();


            tasks.forEach(task => {
                console.log(taskFilters.personalFilter, taskFilters.visibilityFilter);
                const user = Meteor.users.findOne(task.userId);
                task.userInfo = {
                    name: user.profile.name,
                }
            });
            setState({...state, tasks: tasks, loading: false});
        }catch(error){
            setState({...state, error: error.message});
        }
    }, [state.textValue, taskFilters.personalFilter, taskFilters.visibilityFilter])

    const contextValue = {
        ...state,
        changeTextValue,
        onDeleteTaskPressed,
        changePersonalFilter,
        changeVisibilityFilter,
    }
    return (
        <>
            <ViewTaskContext.Provider value={contextValue}>
                {children}
            </ViewTaskContext.Provider>
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
};