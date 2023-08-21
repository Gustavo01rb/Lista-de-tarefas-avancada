import { Meteor } from 'meteor/meteor';
import { TaskCollection } from '../database/taskCollection';

Meteor.methods({
  'tasks.insert': function (task) {
    try {
      if (!this.userId) throw new Meteor.Error('Not authorized.');
        TaskCollection.insert(task);
      } catch (e) {
        throw new Meteor.Error(e.message);
      }
  },

  'tasks.remove': function(taskId) {
    try{  
      if (!this.userId) throw new Meteor.Error('Você não tem autorização para concluir essa ação.');
      const task = TaskCollection.findOne({ _id: taskId, creatorId: this.userId });
      if (!task) throw new Meteor.Error('Acesso negado.');
      TaskCollection.remove(taskId);
    }catch(e){
      throw new Meteor.Error(e.message);
    }
  },

  'tasks.editTask': function(taskId, taskToEdit) {
    try{
      if (!this.userId) throw new Meteor.Error('Not authorized.');
    const task = TaskCollection.findOne({ _id: taskId, creatorId: this.userId });

    if (!task) {
      throw new Meteor.Error('Access denied.');
    }

    TaskCollection.update(taskId, {
      $set: taskToEdit
    });
    }catch(e){
      console.log(e.message);
      throw new Meteor.Error(e.message);
    }
    
  },
});