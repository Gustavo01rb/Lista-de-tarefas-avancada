import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import {Meteor} from 'meteor/meteor';
import { Navigate } from 'react-router-dom';

// Pages
import Home from '../ui/pages/home/index';
import SingUp from '../ui/pages/signup/index';

const ProtectedRoute = ({Component}) => {
    const isAuthenticated = Meteor.user();
        if (isAuthenticated) 
            return <Component />;
        
        return <Navigate to="/signup" />;
}

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes> 
                <Route exact path="/" element={ProtectedRoute(<Home />)} />
                <Route exact path="/home" element={ProtectedRoute(<Home />)}/> 
                <Route exact path="/signup" element={<SingUp />} />


            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
