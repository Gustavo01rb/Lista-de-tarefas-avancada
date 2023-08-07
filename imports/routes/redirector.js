import React from "react";
import { Navigate } from 'react-router-dom';
import {Meteor} from 'meteor/meteor';

const Redirector = () => {
    const isAuthenticated = Meteor.user();

    if (isAuthenticated) 
        return <Navigate to="/home" />;
    
    return <Navigate to="/signup" />;
    
}

export default Redirector;
