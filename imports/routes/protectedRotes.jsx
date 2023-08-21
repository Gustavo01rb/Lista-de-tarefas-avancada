import React from 'react';
import {Route, Navigate} from 'react-router-dom';

export const ProtectedRoute = ({user, children}) => {
    if (!user) 
        return <Navigate to="/signUp" />;
    return children;
}

export default ProtectedRoute;