import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import shortid from 'shortid';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer){
    Meteor.publish('links', function () {
        return Links.find({ userId:this.userId });
    });

}

Meteor.methods({
    'links.insert':function(url){
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        if (url.substring(0,3) != 'http'){
            url = 'http://' + url;
        }

        
        new SimpleSchema({
            url:{
            type: String,
            regEx: SimpleSchema.RegEx.Url
            }
        }).validate({url:url});
        

        Links.insert({
            _id: shortid.generate(),
            url: url,
            userId: this.userId
        });
    }
});