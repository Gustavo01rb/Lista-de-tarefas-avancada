import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
    'user.updateProfile': function ({
        name,
        avatar,
        company,
        gender,
        birthDate
    }){
        try{
            check(name, String);
            check(company, String);
            check(gender, String);
            check(birthDate, String);
            if(!this.userId) throw new Meteor.Error('Você não tem autorização para concluir essa ação.');
            Meteor.users.update(this.userId, {
                $set:{
                    profile:{
                        name: name.trim(),
                        avatar: avatar,
                        gender:gender.trim(),
                        birthDate: birthDate,
                        company: company.trim()
                    }
                }
            });
        }catch(e){
            throw new Meteor.Error(e.message);
        }        
    },
    'user.updateEmail': function (email){
        try{
            check(email, String);
            if(!this.userId) throw new Meteor.Error('Você não tem autorização para concluir essa ação.');
            Meteor.users.update(this.userId, {
                $set:{
                    'emails.0.address': email.trim()
                }
            });
        }catch(e){
            throw new Meteor.Error(e.message);
        }
    },
    'user.changePassword': function ({
        currentPassword, 
        newPassword
    }){
        try{
            check(currentPassword, String);
            check(newPassword, String);

            if (!this.userId) throw new Meteor.Error('Você não tem autorização para concluir essa ação.');

            const user = Meteor.users.findOne(this.userId);
            
            if (!user) throw new Meteor.Error('Usuário não encontrado.');
      
            if (!Accounts._checkPassword(user, currentPassword)) 
                throw new Meteor.Error('Senha atual incorreta.');
              
      
            Accounts.setPassword(this.userId, newPassword);

        }catch(e){
            throw new Meteor.Error(e.message);
        }
    }
});