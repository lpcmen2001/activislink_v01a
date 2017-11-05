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
            userId: this.userId,
            visible: true,
            visitedCount: 0,
            lastVisitedAt: null
        });

  
    },
    'links.setVisibility':function(_id, visibility){
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }
        new SimpleSchema({
            _id:{
                type: String,
                min:1
            },
            visibility:{
                type: Boolean
            }
        }).validate({_id:_id,visibility:visibility});
        Links.update({_id:_id, userId:this.userId},{$set:{visible:visibility}});
        console.log("Updated to " + visibility.toString());
    },
    'links.trackVisit':function(_id){
        new SimpleSchema({
            _id:{
            type: String,
            min:1
            }
        }).validate({_id});
        Links.update({_id:_id}, {
            $set:{
                lastVisitedAt: new Date().getTime()
            },
            $inc: {
                visitedCount:1
            }
        });
    }
});