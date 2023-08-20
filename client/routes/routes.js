import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

import SignUp from '../pages/signUp/index';
import HomePage from '../pages/home/index';
import TasksPage from '../pages/tasks/index';
import AddTaskPage from '../pages/addTask/index';
import ProfilePage from "../pages/profile";


const ProtectedRoute = ({ component: Component }) => {
    const isAuthenticated = !!Meteor.userId();
    if (isAuthenticated) return <Component />;
    return <Navigate to="/signUp" />;
}


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProtectedRoute component={HomePage} />} />
                <Route path="/home" element={<ProtectedRoute component={HomePage} />} />
                <Route path="/tasks" element={<ProtectedRoute component={TasksPage} />} />
                <Route path="/tasks/new" element={<ProtectedRoute component={AddTaskPage} />} />
                <Route path="/profile" element={<ProtectedRoute component={ProfilePage} />} />
                <Route path="/signUp" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
