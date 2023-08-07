import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Redirector from "./redirector";

// Pages
import Home from '../ui/pages/home/index';
import SingUp from '../ui/pages/signup/index';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes> 
                <Route exact path="/" element={<Redirector />} />
                <Route exact path="/home" element={<Home />} /> 
                <Route exact path="/signup" element={<SingUp />} />


            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
