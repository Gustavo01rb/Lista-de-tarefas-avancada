import React from "react";
import TemplateDrawer from "../../ui/templates/drawer/templateDrawer";
import {Link} from "react-router-dom";
import FloatActionButton from "../../ui/components/floatActionButton";

const TasksPage = () => {
    return (
        <TemplateDrawer indexPage={1}>
            <h1>TasksPage</h1>
            <Link to="/tasks/new">
                <FloatActionButton/>
            </Link>
        </TemplateDrawer>
    );
}

export default TasksPage;