import React from "react";
import {Meteor} from "meteor/meteor";
import {styled} from "@mui/system";
import ListItem from '@mui/material/ListItem';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {StatusTaskOptions} from '../../../helpers/selectOptions' 

const SListItem = styled(ListItem)(({
    colortheme,
    theme
}) => ({
    width: '100%',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: colortheme.main,
    color: colortheme.contrastText,
    boxShadow: theme.shadows[5],
    transition: 'all 0.3s ',
}));


const TaskListItem = ({task, onDeleteTaskPressed}) => {
    const theme = useTheme();
    const colortheme = () => {
        switch (task.status) {
            case StatusTaskOptions.notStarted:
                return theme.palette.notStartedTask;
            case StatusTaskOptions.inProgress:
                return theme.palette.inProgressTask;
            case StatusTaskOptions.done:
                return theme.palette.finishedTask;
            default:
                return theme.palette.error.main;
        }
    }
    return (
        <SListItem
            theme={theme}
            status={task.status}
            colortheme={colortheme()} 
            key={task._id}
            secondaryAction={
                <> 
                    <Link to={`/tasks/edit/${task._id}`}>
                        <IconButton edge="end" aria-label="ver">
                            {task.userId === Meteor.userId()
                                ? <EditIcon  sx={{color: colortheme().contrastText}}/>
                                : <VisibilityIcon sx={{color:colortheme().contrastText}}/>
                            }
                        </IconButton>
                    </Link>
                    {
                        task.userId === Meteor.userId() &&
                        <IconButton 
                            edge="end" 
                            aria-label="delete" 
                            sx={{marginLeft: '10px'}}
                            onClick={() => onDeleteTaskPressed(task._id)}
                        >
                            <DeleteIcon sx={{color:colortheme().contrastText}}/>
                        </IconButton>
                    }
                </>
            }
        >
            <ListItemIcon>
                <AssignmentIcon sx={{color:colortheme().contrastText}}/>
            </ListItemIcon>
            <ListItemText 
                primary={<b>{task.title}</b>} 
                secondary={
                    <Typography
                        textAlign='center'
                        sx={{ 
                            display: 'inline', 
                            paddingLeft: '5px',
                            overflow: 'hidden', 
                        }}
                        variant="caption"
                        
                    >
                        {task.userInfo.name}
                    </Typography>
                }
            />
        </SListItem>
    );
};

export default TaskListItem;