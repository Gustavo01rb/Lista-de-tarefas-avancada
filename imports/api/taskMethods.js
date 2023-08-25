import { Meteor } from "meteor/meteor";
import { TaskCollection } from "../database/taskCollection";
import {check} from 'meteor/check';

Meteor.methods({
    'tasks.insert': function ({
        title,
        description,
        date,
        status,
        personal
    }) {
      try {
        check(title, String);
        check(description, String);
        check(date, String);
        check(status, String);
        check(personal, Boolean);
        
        if (!this.userId) throw new Meteor.Error('Você não tem autorização para concluir essa ação.');
          TaskCollection.insert({
            title: title.trim(),
            description: description.trim(),
            date: date.trim(),
            status: status.trim(),
            personal: personal,
            createdAt: new Date(),
            userId: Meteor.userId(),
          });
        } catch (e) {
          throw new Meteor.Error(e.message);
        }
    },
    'tasks.remove': function(taskId) {
      try{  
        check(taskId, String);
        if (!this.userId) throw new Meteor.Error('Você não tem autorização para concluir essa ação.');
        const task = TaskCollection.findOne({ _id: taskId, userId: this.userId });
        if (!task) throw new Meteor.Error('Acesso negado.');
        TaskCollection.remove(taskId);
      }catch(e){
        throw new Meteor.Error(e.message);
      }
    },
    'tasks.editTask': function({
      taskId,
      title,
      description,
      date,
      status,
      personal
    }) {
      try{
        
        check(taskId, String);
        check(title, String);
        check(description, String);
        check(date, String);
        check(status, String);
        check(personal, Boolean);
        if (!this.userId) throw new Meteor.Error('Você não tem autorização para concluir essa ação.');
        const task = TaskCollection.findOne({ _id: taskId, userId: this.userId });
        if (!task) throw new Meteor.Error('Acesso negado. Ou sua Task não existe.');
        TaskCollection.update(taskId, {
          $set: {
            title: title.trim(),
            description: description.trim(),
            date: date.trim(),
            status: status.trim(),
            personal: personal,
          },
        });
      }catch(e){
        throw new Meteor.Error(e.message);
      }
    }
});