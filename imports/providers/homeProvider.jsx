import React, { createContext, useContext, useState } from "react";
import { Meteor } from "meteor/meteor";
import {TaskCollection} from "../database/taskCollection";
import {useTracker} from "meteor/react-meteor-data";
import {StatusTaskOptions} from "../ui/helpers/selectOptions";

const HomeContext = createContext();
export const useHome = () => useContext(HomeContext);

const initialState = {
    loading: true,
    errorPage: '',
};

export const HomeProvider = ({ children }) => {
    const [state, setState] = useState(initialState);

    useTracker(() => {
        try{
            const handler = Meteor.subscribe('tasks');
            if(!handler.ready()){
                setState({...state, loading: true});
                return;
            };
            setState({
                ...state, 
                loading: false,
                incompleteTask: TaskCollection.find({status: {$ne: StatusTaskOptions.done}}).count(),
                allTasks:{
                    notStarted: TaskCollection.find({status: StatusTaskOptions.notStarted}).count(),
                    inProgress: TaskCollection.find({status: StatusTaskOptions.inProgress}).count(),
                    done: TaskCollection.find({status: StatusTaskOptions.done}).count(),
                    total: TaskCollection.find().count(),
                },
                personal:{
                    notStarted: TaskCollection.find({status: StatusTaskOptions.notStarted, personal: true}).count(),
                    inProgress: TaskCollection.find({status: StatusTaskOptions.inProgress, personal: true}).count(),
                    done: TaskCollection.find({status: StatusTaskOptions.done, personal: true}).count(),
                    total: TaskCollection.find({personal: true}).count(),
                },
                publicTask:{
                    notStarted: TaskCollection.find({status: StatusTaskOptions.notStarted, personal: false, userId: {$ne: Meteor.userId()}}).count(),
                    inProgress: TaskCollection.find({status: StatusTaskOptions.inProgress, personal: false,userId: {$ne: Meteor.userId()}}).count(),
                    done: TaskCollection.find({status: StatusTaskOptions.done, personal: false, userId: {$ne: Meteor.userId()}}).count(),
                    total: TaskCollection.find({personal: false, userId: {$ne: Meteor.userId()}}).count(),
                },
                myPublicTask:{
                    notStarted: TaskCollection.find({status: StatusTaskOptions.notStarted, personal: false, userId: Meteor.userId()}).count(),
                    inProgress: TaskCollection.find({status: StatusTaskOptions.inProgress, personal: false, userId: Meteor.userId()}).count(),
                    done: TaskCollection.find({status: StatusTaskOptions.done, personal: false, userId: Meteor.userId()}).count(),
                    total: TaskCollection.find({personal: false, userId: Meteor.userId()}).count(),
                }
                
            });  

        }catch(error){
            setState({...state, errorPage: error.message, loading: false});
        }
    }, []);

    const contextValue = {
        ...state,
    }
    return (
        <HomeContext.Provider value={contextValue}>
            {children}
        </HomeContext.Provider>
    );
}