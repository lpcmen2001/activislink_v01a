import { Meteor } from 'meteor/meteor';
import '../imports/api/users';

Meteor.startup(() => {

  /*
  const employeeSchema = new SimpleSchema({
    name:{
      type: String,
      min: 1,
      max: 200
    },
    hourlyWage:{
      type: Number,
      min:0
    },
    email:{
      type:String,
      regEx: SimpleSchema.RegEx.Email
    }
  });


  const petSchema = new SimpleSchema({
    name: {
      type: String,
      min: 2,
      max: 200,
      optional: true
    },
    age: {
      type: Number,
      min: 0
    },
    contactNumber:{
      type: String,
      optional: true,
      regEx: SimpleSchema.RegEx.Phone
    }
  });

  petSchema.validate({
    name: 'Louis',
    age: 1,
    contactNumber: '123-1233-1232'
  });

  employeeSchema.validate({
    name: 'Louis',
    hourlyWage: 0,
    email: 'bobobobo@bobobo.com'
  });
  */

});
