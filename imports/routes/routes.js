import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

// Pages
import Home from '../ui/pages/home/index';
import SignUp from '../ui/pages/signup/index';

const ProtectedRoute = ({ component: Component }) => {
    const isAuthenticated = !!Meteor.userId();
    
    if (isAuthenticated) {
        return <Component />;
    }
    
    return <Navigate to="/signup" />;
}

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProtectedRoute component={Home} />} />
                <Route path="/home" element={<ProtectedRoute component={Home} />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
