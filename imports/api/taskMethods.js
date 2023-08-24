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
        
        if (!this.userId) throw new Meteor.Error('Not authorized.');
          TaskCollection.insert({
            title: title,
            description: description,
            date: date,
            status: status,
            personal: personal,
            createdAt: new Date(),
            userId: Meteor.userId(),
          });
        } catch (e) {
          throw new Meteor.Error(e.message);
        }
    },
});