import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

import SignUp from '../../client/pages/signUp/index';
import HomePage from '../../client/pages/home/index';
import TasksPage from '../../client/pages/tasks/index';
import AddTaskPage from '../../client/pages/addTask/index';


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
                <Route path="/home" element={<ProtectedRoute component={HomePage} />} />
                <Route path="/tasks" element={<ProtectedRoute component={TasksPage} />} />
                <Route path="/tasks/new" element={<ProtectedRoute component={AddTaskPage} />} />
                <Route path="/signUp" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
