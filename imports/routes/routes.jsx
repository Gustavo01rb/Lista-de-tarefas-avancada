import React from "react";
import { BrowserRouter} from 'react-router-dom';
import { MainRoutes } from "./mainRoutes";
import {Meteor} from "meteor/meteor";
import {useTracker} from "meteor/react-meteor-data";

const AppRoutes = () => {
    const user = useTracker(() => Meteor.user());
    return (
        <BrowserRouter>
            <MainRoutes user={user}/>
        </BrowserRouter>
    );
}

export default AppRoutes;