import { Meteor } from 'meteor/meteor';

Meteor.publish('userData', function() {
    if (!this.userId) throw new Meteor.Error('Acesso não autorizado.'); 
    return Meteor.users.find();
}); 