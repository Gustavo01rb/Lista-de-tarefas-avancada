import React, { createContext, useContext, useState } from "react";
import { Meteor } from "meteor/meteor";
import { useNavigate } from 'react-router-dom';
import SimpleDialog from "../ui/common/simpleDialog";

const AddTaskContext = createContext();
export const useAddTask = () => useContext(AddTaskContext);

const initialState = {
    loading: false,
    personalChecked: false,
}

const initialStateDialog = {
    show: false,
    onClose: () => { },
    title:'',
    message: '',
    variant: '',
}

export const AddTaskProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    const [dialog, setDialog] = useState(initialStateDialog);
    const navigate = useNavigate();

    const openAlert = (title, message, onClose, variant) => {
        setDialog({
            show: true,
            onClose: onClose,
            title: title,
            message: message,
            variant: variant,
        });
    };

    const changePersonalChecked = () => setState(prevState => ({ ...prevState, personalChecked: !prevState.personalChecked }));
    const onSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        
        setState(prevState => ({ ...prevState, loading: true }));

        Meteor.call('tasks.insert', {
            title: form.title.value,
            description: form.description.value,
            status: form.status.value,
            date: form.date.value,
            personal: state.personalChecked,
        }, (err, _) => {
            if (err) {
                openAlert('Erro', err.message, () => {setDialog({...dialog, show: false})}, 'error');
                setState(prevState => ({ ...prevState, loading: false }));
                return;
            }
            openAlert('Sucesso', 'Tarefa adicionada com sucesso!', () => {navigate('/tasks');}, 'success');
        });
    };

    
    const contextValue = {
        ...state,
        changePersonalChecked,
        onSubmit
    };
    return (
        <>
            <AddTaskContext.Provider value={contextValue}>
                {children}
            </AddTaskContext.Provider>
            <SimpleDialog 
                open={dialog.show}
                title={dialog.title}
                message={dialog.message}
                onClose={dialog.onClose}
                variant={dialog.variant}
            />
        </>
    )
}
