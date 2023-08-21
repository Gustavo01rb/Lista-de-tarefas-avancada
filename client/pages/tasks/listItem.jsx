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
import AppColors from "../../ui/styles/appColors";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from "react-router-dom";

const SListItem = styled(ListItem)(({
    status = 'Cadastrada'
}) => ({
    margin: '10px 0',
    width: '100%',
    maxWidth: '100%',
    border: '1px solid black',
    borderRadius: '5px',
    color: AppColors.onPrimary,
    backgroundColor: status === 'Cadastrada' ? AppColors.notStartedTask : status === 'Em andamento' ? AppColors.inProgressTask : AppColors.finishedTask,
}));


const TaskListItem = ({task, onDeleteTaskPressed}) => {
    return (
        <SListItem
            status={task.status} 
            key={task._id}
            secondaryAction={
                <> 
                    <Link to={`/tasks/edit/${task._id}`}>
                        <IconButton edge="end" aria-label="ver">
                            {task.creatorId === Meteor.userId()
                                ? <EditIcon  sx={{color:AppColors.onPrimary}}/>
                                : <VisibilityIcon sx={{color:AppColors.onPrimary}}/>
                            }
                        </IconButton>
                    </Link>
                    {
                        task.creatorId === Meteor.userId() &&
                        <IconButton 
                            edge="end" 
                            aria-label="delete" 
                            sx={{marginLeft: '10px'}}
                            onClick={() => onDeleteTaskPressed(task._id)}
                        >
                            <DeleteIcon sx={{color:AppColors.onPrimary}}/>
                        </IconButton>
                    }
                </>
            }
        >
            <ListItemIcon>
                <AssignmentIcon sx={{color:AppColors.onPrimary}}/>
            </ListItemIcon>
            <ListItemText 
                primary={<b>{task.name}</b>} 
                secondary={
                    <Typography
                        textAlign='center'
                        sx={{ 
                            display: 'inline', 
                            paddingLeft: '5px',
                            overflow: 'hidden', 
                        }}
                        variant="body2"
                        
                    >
                        {
                            task.creatorInfo.name.split(' ')[0] 
                            + ' ' + 
                            task.creatorInfo.name.split(' ')[task.creatorInfo.name.split(' ').length - 1]
                        }
                    </Typography>
                }
            />
        </SListItem>
    );
};

export default TaskListItem;