import React from "react";
import {Box, styled} from "@mui/system";
import {useEditTask} from "../../../imports/controllers/editTaskController";
import AppTextField from "../../ui/components/textField";
import {Meteor} from "meteor/meteor";
import FloatActionButton from "../../ui/components/floatActionButton";
import AppColors from "../../ui/styles/appColors";
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import AppSelect from "../../ui/components/select";



const SContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '100%',
    '@media (max-width: 768px)': {
        flexDirection: 'column',
    }
}));
const SColumn = styled(Box)(() => ({
    width: '50%',
    '@media (max-width: 768px)': {
        width: '100%',
    }
}));
const SUserInfo = styled(Box)(() => ({
    width: '40%',
    border: '1px solid #000',
    borderRadius: '5px',
    padding: '10px',
    '@media (max-width: 768px)': {
        width: '100%',
        marginTop: '20px',
    }
}));

const SAvatar = styled(Box)(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '15px 0',
}));


const FieldsComponent = () => {
    function convertDate(isoDate) {
        const date = new Date(isoDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
    
        return `${day}/${month}/${year}`;
    }

    const {task, edit, onFloatActionButtonTap, user, editTask, saveTaks } = useEditTask();
    return (
        <SContainer>
            <SColumn>
                <AppTextField 
                    type={'text'}
                    label="Nome da tarefa"
                    value={task[0].name}
                    onChange={edit ? (e) => editTask('name', e) : null}
                />
                <AppTextField 
                    type={'text'}
                    label="Descrição"
                    value={task[0].description}
                    multiline={true}
                    rows={4}
                    onChange={edit ? (e) => editTask('description', e) : null}
                />
                <AppSelect 
                    defaultValue="Cadastrada"
                    label="Status" 
                    value={task[0].status}
                    options={['Cadastrada', 'Em andamento', 'Concluida']} 
                    sx={{marginBottom: '10px'}}
                    onChange={edit ? (e) => editTask('status', e) : null}
                />
                <AppTextField 
                    type={'date'}
                    label="Data"
                    value={task[0].date}
                    onChange={edit ? (e) => editTask('date', e) : null}
                />
                <AppTextField 
                    type={'text'}
                    label="Data de criação da tarefa"
                    value={convertDate(task[0].dateCreated)}
                    disabled={true}
                />
            </SColumn>
            <SUserInfo>
                <Typography variant="h5" >
                    Informações do proprietário da tarefa
                </Typography>
                <SAvatar>
                    <Avatar src = {user.profile.profileImage} sx={{width:'150px', height:"150px"}}/>
                    <Typography variant="h6" fontWeight={'bold'} textAlign={'center'} sx={{p:2}} > {user.profile.name} </Typography>
                </SAvatar>
                <Box sx={{padding: '10px 40px'}}>
                    <Typography variant='body1'><b>Contato:</b> {user.emails[0].address}</Typography>
                    <Typography variant='body1'><b>Empresa:</b> {user.profile.company}</Typography>
                </Box>


            </SUserInfo>
            { task[0].creatorId === Meteor.userId() &&
                <FloatActionButton onTap={edit ? saveTaks :  onFloatActionButtonTap} backgroundColor = {edit ? AppColors.success: AppColors.primary}>
                    {
                        edit 
                            ? <SaveIcon sx={{
                                color: AppColors.onPrimary,
                                alignSelf: 'center',
                            }} />
                            : <EditIcon sx={{
                                color: AppColors.onPrimary,
                                alignSelf: 'center',
                            }} />
                    }
                </FloatActionButton>
            }
        </SContainer>
    );
}

export default FieldsComponent;