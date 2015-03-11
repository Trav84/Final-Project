/**
* Suite.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: { type: 'string', unique: true, required: true },
  	questions: {
    	collection: 'SuiteQuestions',
    	via: 'owner'
    },
    programs: {
    	collection: 'Program',
    	via: 'suites'
    }
  }
};

