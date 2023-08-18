import {Meteor} from 'meteor/meteor';
import {TaskCollection} from '../database/taskCollection';

Meteor.publish('tasks', function () {
    return TaskCollection.find();
  });
  