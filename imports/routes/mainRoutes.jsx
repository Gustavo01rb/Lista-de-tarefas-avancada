import React from "react";
import {Routes, Route} from "react-router-dom";
import ProtectedRoute from "./protectedRotes";

import SignUpPage from "../ui/pages/signUp/index";
import HomePage from "../ui/pages/home";
import TasksPage from "../ui/pages/tasks";
import ProfilePage from "../ui/pages/profile";

export const MainRoutes = ({user}) => {
    return (
        <Routes>
            <Route path="/signUp" element={<SignUpPage />} />
            <Route 
                path='*' 
                element={
                    <ProtectedRoute user={user} >
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/home" element={<HomePage />} />
                            <Route path="/tasks" element={<TasksPage />} />
                            <Route path="/profile" element={<ProfilePage />} />

                            
                        </Routes>
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};