import { Meteor } from 'meteor/meteor';
import { TaskCollection } from '../database/taskCollection';

Meteor.publish('tasks', function () {
  if (!this.userId) throw new Meteor.Error('Acesso não autorizado.');
  return TaskCollection.find({
    $or: [
      { userId: this.userId },
      { personal: false, userId: { $ne: this.userId }}
    ]
  });
});
