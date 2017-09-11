import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';


import '../imports/api/users';
import '../imports/api/links';

import '../imports/startup/simple-schema-conf';

Meteor.startup(() => {
    WebApp.connectHandlers.use((req,res, next)=>{
        console.log("This is from the custom middleware");
        console.log("Req is",req.url);
        next();
    });
});
