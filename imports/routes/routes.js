import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

import SignUp from '../../client/pages/signUp/index';
import Home from '../../client/pages/home/index';

const ProtectedRoute = ({ component: Component }) => {
    const isAuthenticated = !!Meteor.userId();
    if (isAuthenticated) return <Component />;
    return <Navigate to="/signUp" />;
}


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProtectedRoute component={SignUp} />} />
                <Route path="/home" element={<ProtectedRoute component={Home} />} />
                <Route path="/signUp" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
