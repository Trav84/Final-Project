/**
* SuiteAnswers.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	answer: { type: 'integer', unique: false, required: true },
  	displayText: { type: 'string', unique: false, required: true },
  	SuiteQuestionID: {
    	model: 'SuiteQuestions'
    },
  }
};

