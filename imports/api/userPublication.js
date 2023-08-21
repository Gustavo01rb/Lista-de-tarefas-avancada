import { Meteor } from 'meteor/meteor';

Meteor.publish('userData', function(userId) {
  if (this.userId) {
    return Meteor.users.find(userId);
  } else {
    this.ready();
  }
});