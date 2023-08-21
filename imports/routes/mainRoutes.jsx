import React from "react";
import {Routes, Route} from "react-router-dom";
import ProtectedRoute from "./protectedRotes";

import SignUpPage from "../ui/pages/signUp/index";
import HomePage from "../ui/pages/home";

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
                        </Routes>
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
};