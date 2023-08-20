import {Meteor} from 'meteor/meteor';
import {TaskCollection} from '../database/taskCollection';

Meteor.publish('tasks', function (filter) {
  if(!this.userId) {
    return this.ready();
  }
  if(filter === 'personal') {
    return tasks = TaskCollection.find({ creatorId: Meteor.userId(), personal: true });
  }

  return tasks = TaskCollection.find({
    $or: [
      { creatorId: { $ne: Meteor.userId() }, personal: false },
      { creatorId: Meteor.userId() }
    ]
  });
});
  