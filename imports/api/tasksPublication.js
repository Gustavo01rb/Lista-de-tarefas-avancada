import { Meteor } from 'meteor/meteor';
import { TaskCollection } from '../database/taskCollection';
import { check } from 'meteor/check';

Meteor.publish('tasks', function () {
  if (!this.userId) return this.ready();
  return TaskCollection.find({
    $or: [
      { userId: this.userId },
      { personal: false, userId: { $ne: this.userId }}
    ]
  });
});
