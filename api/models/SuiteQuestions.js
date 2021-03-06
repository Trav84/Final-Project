/**
* SuiteQuestions.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	title: { type: 'string', unique: false, required: true },
    answer: {type: 'integer', unique: false, required: true },
  	owner: {
    	model: 'Suite'
    },
    choices: {
    	collection: 'SuiteAnswers',
    	via: 'SuiteQuestionID'
    },
    studentAnswers: {
      collection: 'studentAnswer',
      via: 'questionID'
    }

  }
};

