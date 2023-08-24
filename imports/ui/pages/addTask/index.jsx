import React from "react";
import {AddTaskProvider} from "../../../providers/addTaskProvider";
import ResponsiveColumns from "../../templates/responsiveColumns/responsiveColumns";
import DecImage from "./components/decImage";
import FormAddTask from "./components/formAddTaks";
import { useTheme } from '@mui/material/styles';

const AddTaskPage = () => {
    const theme = useTheme();
    return (
        <AddTaskProvider>
            <ResponsiveColumns
                padding = {0}
                align={'flex-start'}
                spacing={0}
                sx={{
                    minHeight: '100vh',
                }}
            >
                <DecImage />
                <FormAddTask />
            </ResponsiveColumns>
        </AddTaskProvider>
    );
}

export default AddTaskPage;