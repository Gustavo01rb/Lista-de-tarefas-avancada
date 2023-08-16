import {Meteor} from 'meteor/meteor';
import {TaskCollection} from '../database/taskCollection';

Meteor.publish('tasks', function publishTasks() {
    return TaskCollection.find({userId: this.userId});
});