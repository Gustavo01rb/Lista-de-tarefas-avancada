import {Meteor} from 'meteor/meteor';

class Task {
    constructor({id, name, description, date, status, personal, dateCreated, creatorId, creadorInfo}){
        this.id = id;
        this.name = name;
        this.description = description;
        this.date = date;
        this.status = status;
        this.personal = personal;
        this.dateCreated = dateCreated || new Date();
        this.creatorId = creatorId || Meteor.userId();
        this.creatorInfo = creadorInfo || {
            name: Meteor.user().profile.name,
            email: Meteor.user().emails[0].address,
            profileImage: Meteor.user().profile.profileImage
        };

    }

    toMap(){
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            date: this.date,
            status: this.status,
            dateCreated: this.dateCreated,
            personal: this.personal,
            creatorId: this.creatorId,
            creatorInfo: this.creatorInfo
        }
    }
}

export default Task;