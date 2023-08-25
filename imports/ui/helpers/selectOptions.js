import theme from '../themes/themeDefault';

export class GenderOptions{
    static female = 'Feminino';
    static male = 'Masculino';
    static other = 'Outro';

    static getOptions(){
        return ['Feminino', 'Masculino', 'Outro']
    }
}

export class StatusTaskOptions{
    static notStarted = 'Cadastrada';
    static inProgress = 'Em Progresso';
    static done = 'Concluída';

    static getOptions(){
        return ['Cadastrada', 'Em Progresso', 'Concluída']
    }

    static getColors(){
        return {
            'Cadastrada': theme.palette.notStartedTask,
            'Em Progresso': theme.palette.inProgressTask,
            'Concluída': theme.palette.finishedTask,
        }
    }

    static getColor(status){
        return this.getColors()[status];
    }

}
