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
import {useAddTask} from "../../../../providers/addTaskProvider";

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


const FormAddTask = () => {
    const theme = useTheme();
    const {personalChecked, changePersonalChecked, onSubmit, loading} = useAddTask();
    return (
        <SContainer theme={theme}>
            <AppLogoIconTitle title={'Adicionar Tarefa'}/>
            <form style={{width:'100%'}} onSubmit={onSubmit} >
                <SFormContainer theme={theme}>
                    <AppTextField
                        title={'Título'}
                        name={'title'}
                        placeholder={'Ex: Comprar pão'}
                        type={'text'}
                        required
                    />    
                    <AppTextField
                        title={'Descrição'}
                        name={'description'}
                        placeholder={'A sua descrição também poerá ser vista por outras pessoas caso a tarefa seja pública.'}
                        multiline={true}
                        type={'text'}
                    />
                    <AppTextField
                        title={'Data de entrega'}
                        name={'date'}
                        type={'date'}
                    />
                    <AppSelect
                        title={'Status da tarefa'}
                        name={'status'}
                        size = 'small'
                        defaultValue={StatusTaskOptions.notStarted}
                        options={StatusTaskOptions.getOptions()}
                    />
                    <AppCheckBox 
                        title={'Tarefa Pessoal'} 
                        subtitle={'*Tarefas pessoais só podem ser vista por seus criadores.'}
                        value={personalChecked}
                        onChange={changePersonalChecked}
                    />
                    <AppLoadingButton 
                        loading={loading}
                        type={'submit'}
                        sx={{
                            alignSelf: 'flex-end',
                        }}
                    > Adicionar Tarefa </AppLoadingButton>
                </SFormContainer>
            </form>
        </SContainer>
    );
}

export default FormAddTask;
