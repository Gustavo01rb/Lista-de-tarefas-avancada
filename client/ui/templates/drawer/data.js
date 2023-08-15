import React from 'react';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const data = [
    {
        id: 0,
        name: 'Página Inicial',
        icon: <InsertChartIcon />,
        path: '/home'
    },
    {
        id: 1,
        name: 'Tarefas',
        icon: <AssignmentIcon />,
        path: '/tasks'
    },
    {
        id: 2,
        name: 'Perfil',
        icon: <AccountCircleIcon />,
        path: '/profile'
    }
]