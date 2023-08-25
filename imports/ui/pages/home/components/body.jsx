import React from "react";
import ShowStatistics from "./showStatiscs";
import {styled} from "@mui/system";
import {Box, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import CardNumberItem from '../../../common/cardNumberItem'
import {StatusTaskOptions} from '../../../helpers/selectOptions'
import { useHome } from "../../../../providers/homeProvider";




const SContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(6),
}));
const STotal = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        paddingLeft: theme.spacing(0),
    }
}));

const HomeBody = () => {
    const {allTasks, personal, publicTask, myPublicTask} = useHome();
    const theme = useTheme();
    return (
        <SContainer theme={theme}>
            <ShowStatistics title={'Todas as tarefas'}>
                <CardNumberItem status={StatusTaskOptions.notStarted} number={allTasks.notStarted}/>
                <CardNumberItem status={StatusTaskOptions.inProgress} number={allTasks.inProgress}/>
                <CardNumberItem status={StatusTaskOptions.done}       number={allTasks.done}/>
                <STotal theme={theme}>
                    <Typography variant='h2' fontWeight='bold'>{allTasks.total}</Typography>
                    <Typography variant='h5'>Total cadastrado.</Typography>
                </STotal>
            </ShowStatistics>

            <ShowStatistics title={'Apenas tarefas pessoais'}>
                <CardNumberItem status={StatusTaskOptions.notStarted} number={personal.notStarted}/>
                <CardNumberItem status={StatusTaskOptions.inProgress} number={personal.inProgress}/>
                <CardNumberItem status={StatusTaskOptions.done}       number={personal.done}/>
                <STotal theme={theme}>
                    <Typography variant='h2' fontWeight='bold'>{personal.total}</Typography>
                    <Typography variant='h5'>Total cadastrado.</Typography>
                </STotal>
            </ShowStatistics>

            <ShowStatistics title={'Apenas tarefas compartilhadas'}>
                <CardNumberItem status={StatusTaskOptions.notStarted} number={myPublicTask.notStarted}/>
                <CardNumberItem status={StatusTaskOptions.inProgress} number={myPublicTask.inProgress}/>
                <CardNumberItem status={StatusTaskOptions.done}       number={myPublicTask.done}/>
                <STotal theme={theme}>
                    <Typography variant='h2' fontWeight='bold'>{myPublicTask.total}</Typography>
                    <Typography variant='h5'>Total cadastrado.</Typography>
                </STotal>
            </ShowStatistics>

            <ShowStatistics title={'Apenas tarefas públicas de outros usuários'}>
                <CardNumberItem status={StatusTaskOptions.notStarted} number={publicTask.notStarted}/>
                <CardNumberItem status={StatusTaskOptions.inProgress} number={publicTask.inProgress}/>
                <CardNumberItem status={StatusTaskOptions.done}       number={publicTask.done}/>
                <STotal theme={theme}>
                    <Typography variant='h2' fontWeight='bold'>{publicTask.total}</Typography>
                    <Typography variant='h5'>Total cadastrado.</Typography>
                </STotal>
            </ShowStatistics>

        </SContainer>
    );
};

export default HomeBody;