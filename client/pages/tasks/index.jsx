import React from "react";
import TemplateDrawer from "../../ui/templates/drawer/templateDrawer";
import {Link} from "react-router-dom";
import FloatActionButton from "../../ui/components/floatActionButton";
import {TaskCollection} from "../../../imports/database/taskCollection";
import { useTracker } from 'meteor/react-meteor-data';
import {Meteor} from "meteor/meteor";

const TasksPage = () => {
    Meteor.subscribe('tasks');
    const tasks = useTracker(() => TaskCollection.find().fetch());
    console.log(tasks);

    return (
        <TemplateDrawer indexPage={1}>
            <h1>TasksPage</h1>
            <p>{JSON.stringify(tasks)}</p>
            <Link to="/tasks/new">
                <FloatActionButton/>
            </Link>
        </TemplateDrawer>
    );
}

export default TasksPage;