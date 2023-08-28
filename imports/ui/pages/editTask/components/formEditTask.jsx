import React from "react";
import {styled} from "@mui/system";
import {Box} from "@mui/material";
import AppLogoIconTitle from "../../../common/appLogoIconTitle";
import {useTheme} from '@mui/material/styles';
import AppTextField from "../../../common/textField";
import AppSelect from "../../../common/select";
import {StatusTaskOptions} from "../../../helpers/selectOptions";
import AppCheckBox from "../../../common/checkBox";
import AppLoadingButton from "../../../common/loadingButton";
import { useEditTask } from "../../../../providers/editTaskProvider";
import {Meteor} from "meteor/meteor";
import Typography from '@mui/material/Typography';
import UserCardInfo from "../../../common/userCardInfo";
import Button from "@mui/material/Button";
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';


const SContainer = styled(Box)(({theme})=>({
    width: '60%',
    padding: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
        width: '100%',
        padding: theme.spacing(3),
    },
}));
const SFormContainer = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: theme.spacing(2),
    width: '100%',
    boxSizing: 'border-box',
}));
const SButtonContainer = styled(Box)(({theme})=>({
    transition: '0.3s',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: theme.spacing(2),
    width: '100%',

}));

const FormEditTask = () => {
    const theme = useTheme();
    const {dataTask, changeField,changeCheckbox, edited, cancelEdit, onSubmitted, loadingButton} = useEditTask();
    function convertDate(isoDate) {
        const date = new Date(isoDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
    
        return `${year}-${month}-${day}`;
    }
    const disabledFields = Meteor.userId() !== dataTask.userId;
    return (
        <SContainer theme={theme}>
            <AppLogoIconTitle title={'Editar Tarefa'}/>
            <form style={{width:'100%'}} onSubmit={onSubmitted} >
                <SFormContainer theme={theme}>
                    <AppTextField
                        title={'Título'}
                        placeholder={'Ex: Comprar pão'}
                        type={'text'}
                        value={dataTask.title}
                        required
                        disabled={disabledFields}
                        onChange={(e) => changeField('title', e)}
                    />    
                    <AppTextField
                        title={'Descrição'}
                        value={dataTask.description}
                        placeholder={'A sua descrição também poerá ser vista por outras pessoas caso a tarefa seja pública.'}
                        multiline={true}
                        type={'text'}
                        disabled={disabledFields}
                        onChange={(e) => changeField('description', e)}
                    />
                    <AppTextField
                        title={'Data de entrega'}
                        type={'date'}
                        value={dataTask.date}
                        disabled={disabledFields}
                        onChange={(e) => changeField('date', e)}
                    />
                    <AppTextField
                        title={'Data de criação da tarefa'}
                        type={'date'}
                        value={convertDate(dataTask.createdAt)}
                        disabled
                    />
                    <AppSelect
                        title={'Status da tarefa'}
                        name={'status'}
                        size = 'small'
                        options={StatusTaskOptions.getOptions()}
                        value={dataTask.status}
                        disabled={disabledFields}
                        onChange={(e) => changeField('status', e)}
                    />
                    <UserCardInfo userProfile={dataTask.user} title={'Criador da tarefa'}/>

                    {!disabledFields && <AppCheckBox 
                        title={'Tarefa Pessoal'} 
                        subtitle={'*Tarefas pessoais só podem ser vista por seus criadores.'}
                        checked={dataTask.personal}
                        onChange={(e) => changeCheckbox('personal', e)}
                    />}
                    {
                        disabledFields 
                        ?<Typography 
                            variant="body1" 
                            sx={{alignSelf:'center', mt: 5}}
                        >*Essa tarefa não pode ser editada por você.</Typography>
                        :<SButtonContainer theme={theme}>
                            {edited && <Button 
                                variant="text"
                                color="error"
                                startIcon={<CancelIcon />}
                                sx={{transition: '0.3s'}}
                                onClick={() => cancelEdit() }
                            >Cancelar Alterações</Button>}
                            <AppLoadingButton 
                                type={'submit'}
                                loading={loadingButton}
                                disabled={!edited}
                                startIcon={<SaveIcon />}
                    > Salvar alterações </AppLoadingButton>
                        </SButtonContainer>
                    }
                </SFormContainer>
            </form>
        </SContainer>
    );
}

export default FormEditTask;
