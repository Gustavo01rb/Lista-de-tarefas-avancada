import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { TaskCollection } from '../database/taskCollection';
import Task from '../models/task'; 

Meteor.methods({
  'tasks.insert'(task) {
    check(task, Task);

    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }

    TaskCollection.insert(task.toMap());
  },

  'tasks.remove'(taskId) {
    check(taskId, String);

    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }

    const task = TasksCollection.findOne({ _id: taskId, userId: this.userId });

    if (!task) {
      throw new Meteor.Error('Access denied.');
    }

    TasksCollection.remove(taskId);
  },

  'tasks.setIsChecked'(taskId, isChecked) {
    check(taskId, String);
    check(isChecked, Boolean);

    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }

    const task = TasksCollection.findOne({ _id: taskId, userId: this.userId });

    if (!task) {
      throw new Meteor.Error('Access denied.');
    }

    TasksCollection.update(taskId, {
      $set: {
        isChecked,
      },
    });
  },
});