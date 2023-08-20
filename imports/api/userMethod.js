import { Meteor } from 'meteor/meteor';

Meteor.methods({
    'users.updateProfile': function(profileData) {
      if (this.userId) {
        Meteor.users.update(this.userId, {
          $set: { profile: profileData },
        });
      }
    },
  });