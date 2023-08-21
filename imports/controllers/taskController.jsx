import React, { createContext, useContext, useState } from "react";
import { useTracker } from 'meteor/react-meteor-data';
import { TaskCollection } from '../database/taskCollection';
import { Meteor } from 'meteor/meteor';
import SimpleDialog from "../../client/ui/components/simpleDialog";


const TaskContext = createContext();

export const useTask = () => useContext(TaskContext);

const initialFilters = {
    personalFilter: 'all',
    visibilityFilter: {
        registred: false,
        inProgress: false,
        done: false,
    },

};

const initialStateAlert = {
    show: false,
    onClose: () => { },
    title:'',
    message: '',
    confirmButton: null,
    cancelButton: false,
}

export const TaskController = ({ children }) => {
    const [taskFilters, setTaskFilters] = useState(initialFilters);
    const [alertState, setAlertState] = useState(initialStateAlert);
    
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

    const openAlert = (title, message, onClose, confirmButton, cancelButton, buttonText) => {
        setAlertState({
            show: true,
            onClose: onClose,
            title: title,
            message: message,
            confirmButton: confirmButton,
            cancelButton: cancelButton,
            buttonText: buttonText,
        });
    };

    const onDeleteTaskPressed = (taskId) => {
        openAlert(
            'Deletar tarefa',
            'Tem certeza que deseja deletar essa tarefa?\nEssa ação não pode ser desfeita.',
            () => {
                setAlertState(initialStateAlert);
            },
            () => {
                setAlertState(initialStateAlert);
                Meteor.call('tasks.remove', taskId, (error, _) => {
                    if (error) {
                        openAlert(
                            'Erro ao deletar tarefa',
                            error.message,
                            () => {
                                setAlertState(initialStateAlert);
                            },
                            null,
                            false,
                            'Ok'
                        );
                        return;
                    }
                });
            },
            true,
            'Deletar'
        )
    };

    const {
        tasks = [], 
        loading = true, 
        loadingError = false,
        titleError = '',
        messageError = ''
    } = useTracker(() => {
        try{
            if (!Meteor.user()) throw new Meteor.Error('Acesso negado!', 'Você não tem permissão para acessar essas informações.');
        
            const handler = Meteor.subscribe('tasks');
            if (!handler.ready()) return { loading: true };

            getFilter = () => {
                let personal = {}
                if(taskFilters.personalFilter === 'personal')
                    personal = { personal: true };
                else if(taskFilters.personalFilter === 'public')
                    personal = { personal: false };
                else if(taskFilters.personalFilter === 'other')
                    personal = { creatorId: { $ne: Meteor.userId() } };
                
                let visibility = []
                if(taskFilters.visibilityFilter.registred)
                    visibility.push({status : 'Cadastrada'});
                if(taskFilters.visibilityFilter.inProgress)
                    visibility.push({status : 'Em andamento'});
                if(taskFilters.visibilityFilter.done)
                    visibility.push({status : 'Concluida'});

                if(visibility.length === 0) return personal
                else return { $and: [personal, { $or: visibility }] };
            }

            const tasks = TaskCollection.find(getFilter()).fetch();
            tasks.map(task => {
                Meteor.subscribe('userData', task.creatorId);
                const user = Meteor.users.findOne({_id: task.creatorId});
                task.creatorInfo = {
                    name: user.profile.name,
                    email: user.emails[0].address,
                    avatar: user.profile.profileImage,
                    company: user.profile.company
                };
            });
            return { tasks: tasks, loading: false };
        }catch(e){
            return { tasks: [], loading: false, loadingError: true, titleError: e.error, messageError: e.reason};
        }
    });


    const valueContext = {
        tasks, 
        loading,
        loadingError,
        titleError,
        messageError,
        onDeleteTaskPressed,
        ...taskFilters,
        changePersonalFilter,
        changeVisibilityFilter
        
    }
    return (
        <>
            <TaskContext.Provider value={valueContext}>
                {children}
            </TaskContext.Provider>
            <SimpleDialog 
                open={alertState.show}
                onClose={alertState.onClose}
                title={alertState.title}
                message={alertState.message}
                cancelButton={alertState.cancelButton}
                buttonText={alertState.buttonText}
                onButtonPressed={alertState.confirmButton ? alertState.confirmButton : null}
            />
        </>
    );

}