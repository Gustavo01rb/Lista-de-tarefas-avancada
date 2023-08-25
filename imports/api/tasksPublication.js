import { Meteor } from 'meteor/meteor';
import { TaskCollection } from '../database/taskCollection';
import { check } from 'meteor/check';
import {StatusTaskOptions} from '../ui/helpers/selectOptions'

Meteor.publish('tasks', function (regex, personal, status) {
  if (!this.userId) return this.ready();

  let regexQuery = {};
  let statusQuery = [];
  let personalQuery = {};
  
  if (regex) 
    regexQuery = {title: { $regex: regex, $options: 'i' }};

  if(personal === 'personal')
    personalQuery = {personal: true};
  else if(personal === 'public')
    personalQuery = {personal: false};
  else if(personal === 'other')
    personalQuery = {userId: {$ne: this.userId}};

  if(status.registred)
    statusQuery.push({status: StatusTaskOptions.notStarted});
  if(status.inProgress)
    statusQuery.push({status: StatusTaskOptions.inProgress});
  if(status.done)
    statusQuery.push({status: StatusTaskOptions.done});
  
  const filter = statusQuery.length > 0 ? {$and: [{$or: statusQuery}, regexQuery, personalQuery]} : {$and: [regexQuery, personalQuery]};

  return TaskCollection.find(filter);
});
