import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';


import '../imports/api/users';
import {Links } from '../imports/api/links';

import '../imports/startup/simple-schema-conf';

Meteor.startup(() => {

    WebApp.connectHandlers.use((req,res, next)=>{
        const _id = req.url.slice(1);
        const link = Links.findOne({_id: _id});
        
        if (link){
            res.statusCode = 302;
            res.setHeader('Location', link.url);
            res.end();
            next();
        }else{
            next();
        }
        
    });

    WebApp.connectHandlers.use((req,res, next)=>{
        //set http status code
        //res.statusCode = 404;
        //set http headers
        //res.setHeader('my-customer-header', 'Lp was here');
        //set http body
        //res.write('<h1>This is my middleware at work</h1>');
        //end http request
        //res.end();
        //console.log("This is from the custom middleware");
        //console.log("Req is",req.url,'Req method',req.method,'Req headers',req.headers,'Req Query', req.query);
        next();
    });
});
