/**
* Program.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: { type: 'string', unique: false, required: true},
  	programID: {
    	model: 'User'
    },
    suites: {
    	collection: 'Suite',
    	via: 'programs',
    	dominant: true
    },
    students: {
      collection: 'Student',
      via: 'studentID'
    }
  }
};

