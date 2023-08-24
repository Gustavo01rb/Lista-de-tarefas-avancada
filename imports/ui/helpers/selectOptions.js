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
}
