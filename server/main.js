import { Meteor } from 'meteor/meteor';
import 'meteor/accounts-base';
import '../imports/database/taskCollection';
import '../imports/api/taskMethods';
import '../imports/api/tasksPublication'
import '../imports/api/userPublication'
import '../imports/api/userMethods'



Meteor.startup(async () => {

});
